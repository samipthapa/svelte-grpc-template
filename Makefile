protoc:
	npx protoc --proto_path ./src/proto ./src/proto/* --ts_out=./src/generated