export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  // Get the form data from the request body
  const body = await readBody(event);

  try {
    // Make the external POST request from the server side
    const response = await $fetch('https://api.carboncopy.news/response', {
      method: 'POST',
      headers: {
        'token': config.surveyAccessToken // Use the server-side token
      },
      body: {
        name: body.name,
        company: body.company,
        email: body.email,
        questions: body.questions,
        picked: body.picked
      }
    });

    // Return the response back to the client
    return response;

  } catch (error) {
    // Handle error and send a response with the error message
    return {
      success: false,
      message: 'Error making the API request',
      error: error.message
    };
  }
});