class HttpService {

    _handleErrors(res) {

        if (!res.ok) 
            throw new Error(res.statusText)
        return res
    }

    post(url, dado) {

        return fetch(url, {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(dado)
        }).then(res => res.json())
        .catch(err => this._handleErrors(err))
    }
}