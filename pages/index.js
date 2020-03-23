import fetch from 'isomorphic-fetch'
const Stores = ({ channels }) => ( <>
    <header> 
    <img src = "/logo-nobg.png" alt = "TuTendero.com"/>     
        </header>

    
    <div className = "channels" > 
    
    {
        channels.map(channel => ( 
        <div className = "channel" key = { channel.id } >
            <img src = { channel.urls.logo_image.original } alt = "" / >
            <h2> { channel.title } </h2> </div>
        ))
    } </div> 
    <style jsx > { `
        header {
            background: #ECF4EF;
            padding: 15px;
            text-align: left;
        }
        header img {
            
        }
        .channels {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px,1fr));

        }
        .channel {
            display: block;
            border-radius: 3px;
            bix-shadow_ 0px 2px 6px rgba(0,0,0,0.15);
            marging-botton: 0.5em;
        }
        .channel img {
            width: 100%;
        }
        h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
        }
        ` } 
        </style>

    <style jsx global > { `
    body {
        marging: 0;
        font-family: system-ui;
        backgroudn:white;
    }
    
    ` } </style> 
    </>
);

Stores.getInitialProps = async() => {

    let req = await fetch('https://api.audioboom.com/channels/recommended?api_version=2')
    let { body: channels } = await req.json()
    return { channels }
}

export default Stores;