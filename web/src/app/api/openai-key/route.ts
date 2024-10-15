
export async function GET(request: Request) {

  return Response.json({
    openaiAPIKey: process.env.OPENAI_API_KEY
  });
}
