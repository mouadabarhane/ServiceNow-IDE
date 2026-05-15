import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "0636d7a59913447e848eed46fa8bff60"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "d8c8ed5ae9254b0aa617b085e729cc3a"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "f2c549418d114284944c501a291c89e7"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "14c01f2d00ea4958a8b283482c3dc508"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "cec9ff7b59c64dfea0a08236a6f1d110",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "7dd29123c7a94c08abb122ef19179d90",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "93316aef380e4dcaa9866e36fdcf4609",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
