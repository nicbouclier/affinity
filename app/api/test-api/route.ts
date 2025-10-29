import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  // Check if API key exists
  if (!apiKey) {
    return NextResponse.json({
      error: "ANTHROPIC_API_KEY not found in environment variables"
    }, { status: 500 });
  }

  // Validate API key format
  if (!apiKey.startsWith("sk-ant-")) {
    return NextResponse.json({
      error: "API key format appears incorrect. Should start with 'sk-ant-'"
    }, { status: 500 });
  }

  // Test the API key by calling Anthropic directly
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 10,
        messages: [{ role: "user", content: "Hi" }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        status: "error",
        statusCode: response.status,
        error: data,
        message: "API key test failed. See error details above."
      }, { status: 500 });
    }

    return NextResponse.json({
      status: "success",
      message: "API key is valid and working!",
      model: "claude-3-5-sonnet-20241022",
      response: data,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: "Failed to connect to Anthropic API",
      error: error.message,
    }, { status: 500 });
  }
}
