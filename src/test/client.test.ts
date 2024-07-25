import CASCClient from "../client";


describe( 'client' , () => {

    test( 'test wow', async () => {

        // Get version
        const region = 'kr';
        const product = 'wow';
        const version = await CASCClient.getProductVersion( region, product );

        // Client initialization
        // const client = new CASCClient( region, product, version );
        // await client.init();
        // await client.loadRemoteTACTKeys();
        // await client.loadRemoteListFile(); // pretty slow, recommend to provide fileDataID directly

    } ) ;

    test( 'test diablo 4', async () => {

        // Get version
        const region = 'us';
        const product = 'fenris';
        const version = await CASCClient.getProductVersion( region, product );

        //Client initialization
        const client = new CASCClient( region, product, version );
        await client.init();
        await client.loadRemoteTACTKeys();
        //await client.loadRemoteListFile(); // pretty slow, recommend to provide fileDataID directly

    } ) ;

} ) ;
