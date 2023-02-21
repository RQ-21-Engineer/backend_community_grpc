const grpc = require('@grpc/grpc-js');

const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = 'join_request.proto';

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH, { 
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    }
);

const paymentProto = grpc.loadPackageDefinition(packageDefinition).join_request;

function main() {


    // Establish connection with the server
    const client = new paymentProto.UserJoinService('0.0.0.0:5001', grpc.credentials.createInsecure());

    client.UserJoin({
        github_username: "belajarqywok"
    }, function(_err, response) {

        console.log('Response :', response.join_response); // API response
    });

}

main();