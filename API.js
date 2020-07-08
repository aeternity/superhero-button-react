const BACKEND_URL = 'https://raendom-backend.z52da5wt.xyz';

const backendFetch = (path, ...args) => fetch(`${BACKEND_URL}/${path}`, ...args);

export const sendTip = async ({ tipId, text, author, signCb, parentId }) => {
    const sendComment = (postParam) => backendFetch('comment/api/', {
      method: 'post',
      body: JSON.stringify(postParam),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const responseChallenge = await sendComment({ tipId, text, author });
    const signedChallenge = await signCb(responseChallenge.challenge);
    const respondChallenge = {
      challenge: responseChallenge.challenge,
      signature: signedChallenge,
      parentId,
    };

    return sendComment(respondChallenge);
}