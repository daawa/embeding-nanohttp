

function pause(){
//    var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
//    var sleep = new AsyncFunction('ms', ' console.log("Taking a break...");' +
//                                              ' var promise =  new Promise(resolve => setTimeout(resolve, ms));' +
//                                              ' await promise;' +
//                                              ' console.log("Two second later");')

    async function sleep(ms) {
        console.log('Taking a break...');
        var promise =  new Promise(resolve => setTimeout(resolve, ms));
        await promise;
        console.log('Two second later');
    }

    return sleep;

 };
