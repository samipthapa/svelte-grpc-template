import { studentServiceClientServer } from "../grpcClients/grpc-clients-factory";
import { StudentReq } from "../grpcClients/grpc-clients-factory";

export function getStudentDetails(id) {
    StudentReq.id = id;

    return new Promise((resolve, reject) => {
        studentServiceClientServer.getStudentDetails(StudentReq)
            .then((res) => {
                resolve(res);
            }
            ).catch((err) => {
                reject(err);
            });
    });
}
