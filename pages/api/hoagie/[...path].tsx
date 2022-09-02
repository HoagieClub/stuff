import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async (req, res) => {
    const { accessToken } = await getAccessToken(req, res);
    let { path } = req.query

    if (typeof path === 'string') {
        path = [path]
    }
    path = path.join('/')

    delete req.query.path;
    const qs = Object.keys(req.query).map((key) => `${key}=${req.query[key]}`).join('&');
    const queryString = qs === '' ? '' : `?${qs}`;

    const fetchReq = req.method === 'GET' ? {
        method: req.method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    } : {
        method: req.method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: req.body,
    }

    await fetch(`${process.env.HOAGIE_API_URL}/${path}${queryString}`, fetchReq)
        .then(async (response) => {
            if (!response.ok) {
                res.status(response.status).send(await response.text())
            } else if (response.status === 204) {
                res.send({})
            } else {
                const sendStatus = await response.json();
                res.status(response.status).send(sendStatus);
            }
        }).catch((e) => {
            res.status(404)
                .send(e.message);
        });
});
