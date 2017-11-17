const rp = require('request-promise')
const phantom = require('phantom')

const getDados = () => new Promise((resolve, reject) => {
    
    rp({
        uri: 'https://api.github.com/users/fuchien',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    }).then(data => {
        resolve(data)
    })
    .catch(err => {
        reject(err.message)
    })
})

async function test() {

    try {

        let dados = await getDados()
        // console.log('DADOS --> ',dados)
    } catch (e) {

        // console.log('ERROU --> ', e)
    }
}

test()


const takeScreenShot = (url, nome, tempo) => {

    return new Promise(async (resolve, reject) => {

        const instance = await phantom.create()
        
        const page = await instance.createPage()
        
        page.property('viewportSize', {width: 1920, height: 1080})

        const status = await page.open(url)

        const content = await page.property('content')
        setTimeout(async () => {

            await page.render(nome + '.png')
            console.log(`${nome} downloaded!`)
            await instance.exit()
            resolve()
        }, tempo)
    })
}

const screen = async () => {

    await takeScreenShot('https://sara-watson-santander.mybluemix.net', 'Sara', 25000),
    await takeScreenShot('https://www.youtube.com', 'youtube', 0)
}

screen()