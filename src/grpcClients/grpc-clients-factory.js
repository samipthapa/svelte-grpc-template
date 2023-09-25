import { StudentServiceClient } from "../generated/student.client";
import { StudentRequest } from "../generated/student";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

const config = new GrpcWebFetchTransport({
    baseUrl: "http://192.168.10.67:50051"
})

const studentServiceClientServer = new StudentServiceClient(config);
const StudentReq = StudentRequest.create();

export { studentServiceClientServer, StudentReq };