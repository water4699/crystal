(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const constants = {
    FHEVM_HANDLE_VERSION: 0,
    DEFAULT_DURATION_DAYS: 365,
    PUBLIC_DECRYPT_EIP712: {
        domain: {
            version: "1",
            name: "Decryption"
        },
        types: {
            PublicDecryptVerification: [
                {
                    name: "ctHandles",
                    type: "bytes32[]"
                },
                {
                    name: "decryptedResult",
                    type: "bytes"
                },
                {
                    name: "extraData",
                    type: "bytes"
                }
            ]
        }
    },
    INPUT_VERIFICATION_EIP712: {
        domain: {
            version: "1",
            name: "InputVerification"
        },
        types: {
            CiphertextVerification: [
                {
                    name: "ctHandles",
                    type: "bytes32[]"
                },
                {
                    name: "userAddress",
                    type: "address"
                },
                {
                    name: "contractAddress",
                    type: "address"
                },
                {
                    name: "contractChainId",
                    type: "uint256"
                },
                {
                    name: "extraData",
                    type: "bytes"
                }
            ]
        }
    },
    TEST_MNEMONIC: "test test test test test test test future home encrypt virtual machine",
    DEFAULT_KMS_SIGNERS_ACCOUNTS: {
        initialIndex: 0,
        path: "m/44'/60'/1'/0"
    },
    DEFAULT_COPROCESSOR_SIGNERS_ACCOUNTS: {
        initialIndex: 0,
        path: "m/44'/60'/2'/0"
    },
    DEFAULT_RELAYER_SIGNERS_ACCOUNTS: {
        initialIndex: 0,
        path: "m/44'/60'/3'/0"
    },
    SEPOLIA_ETHEREUM_TESTNET_CHAINID: 11155111,
    FHEVM_CORE_CONTRACTS_PACKAGE_NAME: "@fhevm/core-contracts",
    ZAMA_FHE_ORACLE_SOLIDITY_PACKAGE_NAME: "@zama-fhe/oracle-solidity"
};
Object.freeze(constants);
const __TURBOPACK__default__export__ = constants;
 //# sourceMappingURL=constants.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/methods.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FHEVM_AWAIT_DECRYPTION_ORACLE",
    ()=>FHEVM_AWAIT_DECRYPTION_ORACLE,
    "FHEVM_CREATE_DECRYPTION_SIGNATURES",
    ()=>FHEVM_CREATE_DECRYPTION_SIGNATURES,
    "FHEVM_GET_CLEAR_TEXT",
    ()=>FHEVM_GET_CLEAR_TEXT,
    "RELAYER_METADATA",
    ()=>RELAYER_METADATA,
    "RELAYER_V1_INPUT_PROOF",
    ()=>RELAYER_V1_INPUT_PROOF,
    "RELAYER_V1_PUBLIC_DECRYPT",
    ()=>RELAYER_V1_PUBLIC_DECRYPT,
    "RELAYER_V1_USER_DECRYPT",
    ()=>RELAYER_V1_USER_DECRYPT
]);
const RELAYER_METADATA = "fhevm_relayer_metadata";
const RELAYER_V1_PUBLIC_DECRYPT = "fhevm_relayer_v1_public_decrypt";
const RELAYER_V1_USER_DECRYPT = "fhevm_relayer_v1_user_decrypt";
const RELAYER_V1_INPUT_PROOF = "fhevm_relayer_v1_input_proof";
const FHEVM_GET_CLEAR_TEXT = "fhevm_getClearText";
const FHEVM_AWAIT_DECRYPTION_ORACLE = "fhevm_awaitDecryptionOracle";
const FHEVM_CREATE_DECRYPTION_SIGNATURES = "fhevm_createDecryptionSignatures"; //# sourceMappingURL=methods.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmError",
    ()=>FhevmError,
    "assertArrayOfUint8ArrayDeepEqual",
    ()=>assertArrayOfUint8ArrayDeepEqual,
    "assertFhevm",
    ()=>assertFhevm,
    "assertFhevmFailed",
    ()=>assertFhevmFailed,
    "assertIsArray",
    ()=>assertIsArray,
    "assertIsArrayProperty",
    ()=>assertIsArrayProperty,
    "assertIsObjectProperty",
    ()=>assertIsObjectProperty,
    "assertUint8ArrayDeepEqual",
    ()=>assertUint8ArrayDeepEqual,
    "isHardhatError",
    ()=>isHardhatError,
    "isHardhatProviderError",
    ()=>isHardhatProviderError
]);
function assertFhevm(check, message) {
    if (!check) {
        const title = "Fhevm assertion failed";
        message = message ? title + ": " + message : title;
        throw new FhevmError(message);
    }
}
function assertFhevmFailed(message) {
    const title = "Fhevm assertion failed";
    message = message ? title + ": " + message : title;
    throw new FhevmError(message);
}
function assertIsArray(value, valueName) {
    assertFhevm(Array.isArray(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not an array"));
}
function assertIsArrayProperty(value, propertyNames, typeName) {
    if (typeof value !== "object" || value === null) {
        throw new FhevmError("".concat(typeName, " must be a non-null object."));
    }
    for (const key of propertyNames){
        const prop = value[key];
        if (prop === undefined || prop === null) {
            throw new FhevmError("Invalid ".concat(typeName, ". Missing '").concat(key, "' property."));
        }
        if (!Array.isArray(prop)) {
            throw new FhevmError("Expected '".concat(key, "' in ").concat(typeName, " to be an array."));
        }
    }
}
function assertUint8ArrayDeepEqual(a1, a2) {
    assertFhevm(a1.length === a2.length, "Arrays do not have the same length");
    for(let i = 0; i < a1.length; ++i){
        assertFhevm(a1[i] === a2[i], "Arrays are different. a1[".concat(i, "]=").concat(a1[i], " !== a2[").concat(i, "]=").concat(a2[i]));
    }
}
function assertArrayOfUint8ArrayDeepEqual(a1, a2) {
    assertFhevm(a1.length === a2.length, "Arrays do not have the same length");
    for(let i = 0; i < a1.length; ++i){
        assertUint8ArrayDeepEqual(a1[i], a2[i]);
    }
}
function assertIsObjectProperty(value, propertyNames, typeName) {
    if (typeof value !== "object" || value === null) {
        throw new FhevmError("".concat(typeName, " must be a non-null object."));
    }
    for (const key of propertyNames){
        const prop = value[key];
        if (prop === undefined || prop === null) {
            throw new FhevmError("Invalid ".concat(typeName, ". Missing '").concat(key, "' property."));
        }
        if (typeof prop !== "object") {
            throw new FhevmError("Expected '".concat(key, "' in ").concat(typeName, " to be an object. Got ").concat(typeof prop, " instead."));
        }
    }
}
class FhevmError extends Error {
    constructor(message, options){
        super(message, options);
        //@ts-ignore
        Object.defineProperty(this, "__isFhevmError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.__isFhevmError = true;
    }
}
function isHardhatProviderError(other) {
    if (other === undefined || other === null) {
        return false;
    }
    if (!(other instanceof Error)) {
        return false;
    }
    if (!("code" in other)) {
        return false;
    }
    if (!("_isProviderError" in other)) {
        return false;
    }
    return other._isProviderError === true;
}
function isHardhatError(other) {
    if (other === undefined || other === null) {
        return false;
    }
    if (!(other instanceof Error)) {
        return false;
    }
    if (!("number" in other)) {
        return false;
    }
    if (!("_isHardhatError" in other)) {
        return false;
    }
    return other._isHardhatError === true;
} //# sourceMappingURL=error.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/runtime.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns `true` if the Typescript code is running within a node process, `false` otherwise
 */ __turbopack_context__.s([
    "isBunRuntime",
    ()=>isBunRuntime,
    "isNodeRuntime",
    ()=>isNodeRuntime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function isNodeRuntime() {
    return typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions != null && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node != null;
}
function isBunRuntime() {
    return typeof Bun !== "undefined";
} //# sourceMappingURL=runtime.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canSign",
    ()=>canSign,
    "connectedChainId",
    ()=>connectedChainId,
    "connectedWeb3Client",
    ()=>connectedWeb3Client,
    "getProviderChainId",
    ()=>getProviderChainId,
    "getSignerChainId",
    ()=>getSignerChainId,
    "getWeb3ClientVersion",
    ()=>getWeb3ClientVersion,
    "isReadonlyContract",
    ()=>isReadonlyContract,
    "isReadonlyProvider",
    ()=>isReadonlyProvider,
    "minimalProviderSend",
    ()=>minimalProviderSend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/runtime.js [app-client] (ecmascript)");
;
;
;
async function minimalProviderSend(provider, method, params) {
    let response;
    // Call send first otherwise call request.
    // In case provider is a Hardhat provider, call via send.
    if ("send" in provider && typeof provider.send === "function") {
        response = await provider.send(method, params);
    } else if ("request" in provider && typeof provider.request === "function") {
        response = await provider.request({
            method,
            params
        });
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid provider: must implement request() or send()");
    }
    return response;
}
async function connectedChainId(provider) {
    try {
        return await getProviderChainId(provider);
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatProviderError"])(e)) {
            // RPC method not supported
            if (e.code === -32004) {
                throw e;
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatError"])(e)) {
            // HH only: cannot connect to specified network
            if (e.number === 108) {
                return undefined;
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeRuntime"])()) {
            if (e instanceof Error && "code" in e) {
                // Connection refused, this error can only be catched from a node runtime
                if (e.code === "ECONNREFUSED") {
                    return undefined;
                }
            }
        }
        // Propagate the error
        throw e;
    }
}
async function getProviderChainId(provider) {
    const chainIdHex = await minimalProviderSend(provider, "eth_chainId", []);
    return Number(BigInt(chainIdHex));
}
async function connectedWeb3Client(provider) {
    try {
        return {
            client: await getWeb3ClientVersion(provider),
            couldNotConnect: false
        };
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatProviderError"])(e)) {
            // RPC method not supported
            if (e.code === -32004) {
                return {
                    client: undefined,
                    couldNotConnect: false
                };
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatError"])(e)) {
            // HH only: cannot connect to specified network
            if (e.number === 108) {
                return {
                    client: undefined,
                    couldNotConnect: true
                };
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeRuntime"])()) {
            if (e instanceof Error && "code" in e) {
                // Connection refused, this error can only be catched from a node runtime
                if (e.code === "ECONNREFUSED") {
                    return {
                        client: undefined,
                        couldNotConnect: true
                    };
                }
            }
        }
        // Propagate the error
        throw e;
    }
}
async function getWeb3ClientVersion(provider) {
    return minimalProviderSend(provider, "web3_clientVersion", []);
}
async function getSignerChainId(signer) {
    const provider = signer.provider;
    if (!provider) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unable to determine signer provider");
    }
    const network = await provider.getNetwork();
    return Number(network.chainId);
}
function canSign(obj) {
    if (!obj) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid argument");
    }
    const isDirectSigner = typeof obj.signTransaction === "function";
    const canProduceSigner = typeof obj.getSigner === "function";
    return isDirectSigner || canProduceSigner;
}
function isReadonlyContract(contract) {
    return !canSign(contract.runner);
}
function isReadonlyProvider(obj) {
    if (!obj) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid argument");
    }
    return !canSign(obj) && typeof obj.estimateGas === "function" && typeof obj.call === "function" && typeof obj.getBlock === "function" && typeof obj.getNetwork === "function" && typeof obj.getCode === "function";
} //# sourceMappingURL=provider.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsString",
    ()=>assertIsString,
    "assertIsStringArray",
    ()=>assertIsStringArray,
    "assertIsStringArrayProperty",
    ()=>assertIsStringArrayProperty,
    "assertIsStringProperty",
    ()=>assertIsStringProperty,
    "ensure0x",
    ()=>ensure0x,
    "ensurePrefix",
    ()=>ensurePrefix,
    "ensureSuffix",
    ()=>ensureSuffix,
    "remove0x",
    ()=>remove0x,
    "removePrefix",
    ()=>removePrefix,
    "removeSuffix",
    ()=>removeSuffix,
    "toLowerCaseSet",
    ()=>toLowerCaseSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
;
function removePrefix(s, prefix) {
    return s.startsWith(prefix) ? s.substring(prefix.length) : s;
}
function removeSuffix(s, suffix) {
    return s.endsWith(suffix) ? s.substring(0, s.length - suffix.length) : s;
}
function ensure0x(s) {
    return !s.startsWith("0x") ? "0x".concat(s) : s;
}
function remove0x(s) {
    return s.startsWith("0x") ? s.substring(2) : s;
}
function ensurePrefix(s, prefix) {
    return !s.startsWith(prefix) ? prefix + s : s;
}
function ensureSuffix(s, suffix) {
    return !s.endsWith(suffix) ? s + suffix : s;
}
function assertIsString(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof value === "string", "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not of type string, got ").concat(typeof value, " instead"));
}
function assertIsStringArray(value, valueName) {
    if (!Array.isArray(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not an array of string"));
    }
    for(let i = 0; i < value.length; ++i){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof value[i] === "string", "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", "[").concat(i, "] is not of type string, got ").concat(typeof value[i], " instead"));
    }
}
function assertIsStringProperty(value, propertyNames, typeName) {
    if (typeof value !== "object" || value === null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("".concat(typeName, " must be a non-null object."));
    }
    for (const key of propertyNames){
        const prop = value[key];
        if (typeof prop !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Expected '".concat(key, "' in ").concat(typeName, " to be a string, but got ").concat(typeof prop, " instead."));
        }
    }
}
function assertIsStringArrayProperty(value, propertyNames, typeName) {
    if (typeof value !== "object" || value === null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("".concat(typeName, " must be a non-null object."));
    }
    for (const key of propertyNames){
        const prop = value[key];
        assertIsStringArray(prop, " ".concat(typeName, ".").concat(key));
    }
}
function toLowerCaseSet(array) {
    const s = new Set();
    for(let i = 0; i < array.length; ++i){
        const item = array[i];
        if (item) {
            s.add(item.toLowerCase());
        }
    }
    return s;
} //# sourceMappingURL=string.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addressToBytes",
    ()=>addressToBytes,
    "addressesInAddressList",
    ()=>addressesInAddressList,
    "assertIsAddress",
    ()=>assertIsAddress,
    "assertIsAddressArray",
    ()=>assertIsAddressArray,
    "assertIsAddressProperty",
    ()=>assertIsAddressProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
function assertIsAddress(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(value, valueName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", ": '").concat(value, "' is not a valid address"));
}
function assertIsAddressArray(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArray"])(value, valueName);
    for(let i = 0; i < value.length; ++i){
        assertIsAddress(value[i], valueName ? "".concat(valueName, "[").concat(i, "]") : undefined);
    }
}
function assertIsAddressProperty(value, propertyNames, typeName) {
    if (typeof value !== "object" || value === null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("".concat(typeName, " must be a non-null object."));
    }
    for (const key of propertyNames){
        const prop = value[key];
        if (typeof prop !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Expected '".concat(key, "' in ").concat(typeName, " to be a valid address, but got ").concat(typeof prop, " instead."));
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(prop)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Expected '".concat(key, "' in ").concat(typeName, " to be a valid address, but got ").concat(typeof prop, " instead."));
        }
    }
}
function addressToBytes(value, valueName) {
    assertIsAddress(value, valueName);
    // Debug
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(value, 20).toLocaleLowerCase() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(value, 20));
    // Should use this line of code instead (faster)
    //return EthersT.getBytes(EthersT.zeroPadValue(value, 20));
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(value, 20));
}
function addressesInAddressList(addresses, addressList) {
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toLowerCaseSet"])(addressList);
    for(let i = 0; i < addresses.length; ++i){
        if (!s.has(addresses[i].toLowerCase())) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=address.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/payloads.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsRelayerMetadata",
    ()=>assertIsRelayerMetadata,
    "assertIsRelayerV1InputProofPayload",
    ()=>assertIsRelayerV1InputProofPayload,
    "assertIsRelayerV1InputProofResponse",
    ()=>assertIsRelayerV1InputProofResponse,
    "assertIsRelayerV1PublicDecryptPayload",
    ()=>assertIsRelayerV1PublicDecryptPayload,
    "assertIsRelayerV1PublicDecryptResponse",
    ()=>assertIsRelayerV1PublicDecryptResponse,
    "assertIsRelayerV1UserDecryptPayload",
    ()=>assertIsRelayerV1UserDecryptPayload,
    "assertIsRelayerV1UserDecryptResponse",
    ()=>assertIsRelayerV1UserDecryptResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
function _assertIsRelayerV1UserDecryptValidity(value) {
    const stringFields = [
        "durationDays",
        "startTimestamp"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringFields, "RelayerV1UserDecryptValidity");
}
function assertIsRelayerV1InputProofPayload(value) {
    const stringFields = [
        "contractAddress",
        "userAddress",
        "ciphertextWithInputVerification",
        "contractChainId",
        "extraData"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringFields, "RelayerV1InputProofPayload");
}
function assertIsRelayerV1InputProofResponse(value) {
    const keys = [
        "handles",
        "signatures"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringArrayProperty"])(value, keys, "RelayerV1InputProofResponse");
}
function assertIsRelayerV1PublicDecryptPayload(value) {
    const arrayKeys = [
        "ciphertextHandles"
    ];
    const stringKeys = [
        "extraData"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringArrayProperty"])(value, arrayKeys, "RelayerV1PublicDecryptPayload");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringKeys, "RelayerV1PublicDecryptResponse");
}
function assertIsRelayerV1PublicDecryptResponse(value) {
    const arrayKeys = [
        "signatures"
    ];
    const stringKeys = [
        "decrypted_value"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringArrayProperty"])(value, arrayKeys, "RelayerV1PublicDecryptResponse");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringKeys, "RelayerV1PublicDecryptResponse");
}
function assertIsRelayerV1UserDecryptResponse(value) {
    const stringKeys = [
        "signature"
    ];
    const objectKeys = [
        "payload"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringKeys, "RelayerV1UserDecryptResponse");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsObjectProperty"])(value, objectKeys, "RelayerV1UserDecryptResponse");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringArrayProperty"])(value.payload, [
        "decrypted_values"
    ], "RelayerV1UserDecryptResponse");
}
function assertIsRelayerV1UserDecryptPayload(value) {
    const arrayKeys = [
        "handleContractPairs",
        "contractAddresses"
    ];
    const stringKeys = [
        "contractsChainId",
        "publicKey",
        "signature",
        "userAddress",
        "extraData"
    ];
    const objectKeys = [
        "requestValidity"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringKeys, "RelayerV1UserDecryptPayload");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArrayProperty"])(value, arrayKeys, "RelayerV1UserDecryptPayload");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsObjectProperty"])(value, objectKeys, "RelayerV1UserDecryptPayload");
    _assertIsRelayerV1UserDecryptValidity(value.requestValidity);
}
function assertIsRelayerMetadata(value) {
    const stringKeys = [
        "version"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringKeys, "RelayerMetadata");
    const keys = [
        "ACLAddress",
        "CoprocessorAddress",
        "InputVerifierAddress",
        "KMSVerifierAddress",
        "relayerSignerAddress"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddressProperty"])(value, keys, "RelayerMetadata");
} //# sourceMappingURL=payloads.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/mock_payloads.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsMockRelayerV1InputProofPayload",
    ()=>assertIsMockRelayerV1InputProofPayload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/payloads.js [app-client] (ecmascript)");
;
;
;
;
;
function assertIsMockRelayerV1InputProofPayload(value) {
    const objectKeys = [
        "mockData"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1InputProofPayload"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsObjectProperty"])(value, objectKeys, "MockRelayerV1InputProofPayload");
    _assertIsMockRelayerData(value.mockData);
}
function _assertIsMockRelayerData(value) {
    const arrayKeys = [
        "clearTextValuesBigIntHex",
        "metadatas",
        "fheTypes",
        "fhevmTypes",
        "random32List"
    ];
    const stringKeys = [
        "aclContractAddress"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringKeys, "MockRelayerData");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArrayProperty"])(value, arrayKeys, "MockRelayerData");
} //# sourceMappingURL=mock_payloads.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/MockRelayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requestFhevmAwaitDecryptionOracle",
    ()=>requestFhevmAwaitDecryptionOracle,
    "requestFhevmCreateDecryptionSignatures",
    ()=>requestFhevmCreateDecryptionSignatures,
    "requestFhevmGetClearText",
    ()=>requestFhevmGetClearText,
    "requestRelayerMetadata",
    ()=>requestRelayerMetadata,
    "requestRelayerV1InputProof",
    ()=>requestRelayerV1InputProof,
    "requestRelayerV1PublicDecrypt",
    ()=>requestRelayerV1PublicDecrypt,
    "requestRelayerV1UserDecrypt",
    ()=>requestRelayerV1UserDecrypt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/methods.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$mock_payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/mock_payloads.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/payloads.js [app-client] (ecmascript)");
;
;
;
;
async function requestRelayerV1InputProof(relayerProvider, payload) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$mock_payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsMockRelayerV1InputProofPayload"])(payload);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_V1_INPUT_PROOF"], [
        payload
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1InputProofResponse"])(response);
    return response;
}
async function requestRelayerV1UserDecrypt(relayerProvider, payload) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1UserDecryptPayload"])(payload);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_V1_USER_DECRYPT"], [
        payload
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1UserDecryptResponse"])(response);
    return {
        response: [
            response
        ]
    };
}
async function requestRelayerV1PublicDecrypt(relayerProvider, payload) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1PublicDecryptPayload"])(payload);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_V1_PUBLIC_DECRYPT"], [
        payload
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1PublicDecryptResponse"])(response);
    return {
        response: [
            response
        ]
    };
}
async function requestRelayerMetadata(relayerProvider) {
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_METADATA"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerMetadata"])(response);
    return response;
}
async function requestFhevmAwaitDecryptionOracle(relayerProvider) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVM_AWAIT_DECRYPTION_ORACLE"], []);
}
async function requestFhevmGetClearText(relayerProvider, payload) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVM_GET_CLEAR_TEXT"], [
        payload
    ]);
}
async function requestFhevmCreateDecryptionSignatures(relayerProvider, payload) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVM_CREATE_DECRYPTION_SIGNATURES"], [
        payload
    ]);
} //# sourceMappingURL=MockRelayer.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FHEVM_AWAIT_DECRYPTION_ORACLE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVM_AWAIT_DECRYPTION_ORACLE"],
    "FHEVM_CREATE_DECRYPTION_SIGNATURES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVM_CREATE_DECRYPTION_SIGNATURES"],
    "FHEVM_GET_CLEAR_TEXT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVM_GET_CLEAR_TEXT"],
    "RELAYER_METADATA",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_METADATA"],
    "RELAYER_V1_INPUT_PROOF",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_V1_INPUT_PROOF"],
    "RELAYER_V1_PUBLIC_DECRYPT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_V1_PUBLIC_DECRYPT"],
    "RELAYER_V1_USER_DECRYPT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_V1_USER_DECRYPT"],
    "assertIsMockRelayerV1InputProofPayload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$mock_payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsMockRelayerV1InputProofPayload"],
    "assertIsRelayerMetadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerMetadata"],
    "assertIsRelayerV1InputProofResponse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1InputProofResponse"],
    "assertIsRelayerV1PublicDecryptPayload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1PublicDecryptPayload"],
    "assertIsRelayerV1PublicDecryptResponse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1PublicDecryptResponse"],
    "assertIsRelayerV1UserDecryptPayload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1UserDecryptPayload"],
    "assertIsRelayerV1UserDecryptResponse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1UserDecryptResponse"],
    "requestFhevmAwaitDecryptionOracle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestFhevmAwaitDecryptionOracle"],
    "requestFhevmCreateDecryptionSignatures",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestFhevmCreateDecryptionSignatures"],
    "requestFhevmGetClearText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestFhevmGetClearText"],
    "requestRelayerMetadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestRelayerMetadata"],
    "requestRelayerV1InputProof",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestRelayerV1InputProof"],
    "requestRelayerV1PublicDecrypt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestRelayerV1PublicDecrypt"],
    "requestRelayerV1UserDecrypt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestRelayerV1UserDecrypt"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/methods.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/MockRelayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/payloads.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$mock_payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/mock_payloads.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_UINT128",
    ()=>MAX_UINT128,
    "MAX_UINT16",
    ()=>MAX_UINT16,
    "MAX_UINT160",
    ()=>MAX_UINT160,
    "MAX_UINT256",
    ()=>MAX_UINT256,
    "MAX_UINT32",
    ()=>MAX_UINT32,
    "MAX_UINT512",
    ()=>MAX_UINT512,
    "MAX_UINT64",
    ()=>MAX_UINT64,
    "MAX_UINT8",
    ()=>MAX_UINT8,
    "assertIsBigUint1024",
    ()=>assertIsBigUint1024,
    "assertIsBigUint128",
    ()=>assertIsBigUint128,
    "assertIsBigUint16",
    ()=>assertIsBigUint16,
    "assertIsBigUint160",
    ()=>assertIsBigUint160,
    "assertIsBigUint2048",
    ()=>assertIsBigUint2048,
    "assertIsBigUint256",
    ()=>assertIsBigUint256,
    "assertIsBigUint32",
    ()=>assertIsBigUint32,
    "assertIsBigUint512",
    ()=>assertIsBigUint512,
    "assertIsBigUint64",
    ()=>assertIsBigUint64,
    "assertIsBigUint8",
    ()=>assertIsBigUint8,
    "assertIsBoolean",
    ()=>assertIsBoolean,
    "assertIsNumber",
    ()=>assertIsNumber,
    "assertIsUintNumber",
    ()=>assertIsUintNumber,
    "bitwiseNotUIntBits",
    ()=>bitwiseNotUIntBits,
    "boolToBigInt",
    ()=>boolToBigInt,
    "getMaxBigInt",
    ()=>getMaxBigInt,
    "getRandomBigInt",
    ()=>getRandomBigInt,
    "isEvenUInt",
    ()=>isEvenUInt,
    "isInt",
    ()=>isInt,
    "isUInt",
    ()=>isUInt,
    "log2BigInt",
    ()=>log2BigInt,
    "toUIntNumber",
    ()=>toUIntNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
;
;
const MAX_UINT8 = 0xffn;
const MAX_UINT16 = 0xffffn;
const MAX_UINT32 = 0xffffffffn;
const MAX_UINT64 = 0xffffffffffffffffn;
const MAX_UINT128 = 0xffffffffffffffffffffffffffffffffn;
const MAX_UINT160 = 0xffffffffffffffffffffffffffffffffffffffffn;
const MAX_UINT256 = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn;
const MAX_UINT512 = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn;
function toUIntNumber(value, name) {
    try {
        const bn = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getUint(value, name);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getNumber(bn);
    } catch (e) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("".concat(name, " is not a positive integer"));
    }
}
function isInt(value) {
    if (typeof value === "bigint") {
        return true;
    }
    if (typeof value === "number") {
        return Number.isInteger(value);
    }
    return false;
}
function isUInt(value) {
    if (!isInt(value)) {
        return false;
    }
    return value >= 0;
}
function isEvenUInt(value) {
    if (!isUInt(value)) {
        return false;
    }
    return typeof value === "bigint" ? value % 2n === 0n : value % 2 === 0;
}
function boolToBigInt(value) {
    if (value === null || value === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Missing value");
    }
    let zeroOrOne = 0n;
    // Must be 0 or 1
    if (typeof value === "bigint") {
        if (value !== 1n && value !== 0n) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("The value must be 1 or 0.");
        }
        zeroOrOne = value;
    } else if (typeof value === "number") {
        if (value !== 1 && value !== 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("The value must be 1 or 0.");
        }
        zeroOrOne = value === 0 ? 0n : 1n;
    } else if (typeof value === "boolean") {
        zeroOrOne = value === true ? 1n : 0n;
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("The value must be a boolean, a number or a bigint.");
    }
    return zeroOrOne;
}
function bitwiseNotUIntBits(value, numBits) {
    if (typeof value !== "bigint") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("The input value must be a BigInt.");
    }
    if (!isUInt(numBits)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("The numBits parameter must be a positive integer.");
    }
    // Create the mask with numBits bits set to 1
    const BIT_MASK = (BigInt(1) << BigInt(numBits)) - BigInt(1);
    return ~value & BIT_MASK;
}
function getMaxBigInt(bitLength) {
    if (!isUInt(bitLength)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid bitLength argument (".concat(bitLength, "), expecting a positive integer value."));
    }
    return (1n << BigInt(bitLength)) - 1n;
}
function log2BigInt(x) {
    const n = x.toString(2).length - 1;
    return x <= 0n ? 0n : BigInt(n);
}
function getRandomBigInt(numBits) {
    if (numBits <= 0) {
        throw new TypeError("Number of bits must be greater than 0");
    }
    const numBytes = Math.ceil(numBits / 8);
    const randomBytes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].randomBytes(numBytes);
    let randomBigInt = BigInt(0);
    for(let i = 0; i < numBytes; i++){
        randomBigInt = randomBigInt << BigInt(8) | BigInt(randomBytes[i]);
    }
    const mask = (BigInt(1) << BigInt(numBits)) - BigInt(1);
    randomBigInt = randomBigInt & mask;
    return randomBigInt;
}
function assertIsUintNumber(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof value === "number", "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not of type number, got ").concat(typeof value, " instead"));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(isUInt(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not an uint, got ").concat(typeof value, " instead"));
}
function assertIsBigUint8(value, valueName) {
    _assertIsBigUint(value, 8, MAX_UINT8, valueName);
}
function assertIsBigUint16(value, valueName) {
    _assertIsBigUint(value, 16, MAX_UINT16, valueName);
}
function assertIsBigUint32(value, valueName) {
    _assertIsBigUint(value, 32, MAX_UINT32, valueName);
}
function assertIsBigUint64(value, valueName) {
    _assertIsBigUint(value, 64, MAX_UINT64, valueName);
}
function assertIsBigUint128(value, valueName) {
    _assertIsBigUint(value, 128, MAX_UINT128, valueName);
}
function assertIsBigUint160(value, valueName) {
    _assertIsBigUint(value, 128, MAX_UINT160, valueName);
}
function assertIsBigUint256(value, valueName) {
    _assertIsBigUint(value, 256, MAX_UINT256, valueName);
}
function assertIsBigUint512(value, valueName) {
    _assertIsBigUint(value, 512, MAX_UINT512, valueName);
}
function assertIsBigUint1024(value, valueName) {
    _assertIsBigUint(value, 1024, getMaxBigInt(1024), valueName);
}
function assertIsBigUint2048(value, valueName) {
    _assertIsBigUint(value, 2048, getMaxBigInt(2048), valueName);
}
function _assertIsBigUint(value, bitLen, max, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof value === "bigint", "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not of type bigint, got ").concat(typeof value, " instead"));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(value >= 0 && value <= max, "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is larger than uint").concat(bitLen, " maximum value, got ").concat(value, " > ").concat(max));
}
function assertIsBoolean(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof value === "boolean", "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not of type boolean, got ").concat(typeof value, " instead"));
}
function assertIsNumber(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof value === "number", "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not of type number, got ").concat(typeof value, " instead"));
} //# sourceMappingURL=math.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/time.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "currentTime",
    ()=>currentTime,
    "timestampNow",
    ()=>timestampNow
]);
function currentTime() {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });
}
function timestampNow() {
    return Math.floor(Date.now() / 1000);
} //# sourceMappingURL=time.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/keypair.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyKeypair",
    ()=>verifyKeypair
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
function verifyKeypair(keyPair) {
    keyPair.publicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePrefix"])(keyPair.publicKey, "0x");
    keyPair.privateKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePrefix"])(keyPair.privateKey, "0x");
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isHexString("0x" + keyPair.publicKey, 80)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid key pair's publicKey. Call FhevmInstance.generateKeyPair() to generate a valid FHEVM key pair.");
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isHexString("0x" + keyPair.privateKey, 80)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid key pair's publicKey. Call FhevmInstance.generateKeyPair() to generate a valid FHEVM key pair.");
    }
} //# sourceMappingURL=keypair.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"],
    "assertIsAddress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"],
    "ensurePrefix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensurePrefix"],
    "ensureSuffix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureSuffix"],
    "removePrefix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePrefix"],
    "timestampNow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampNow"],
    "toUIntNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUIntNumber"],
    "verifyKeypair",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyKeypair"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/keypair.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractWrapper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmContractWrapper",
    ()=>FhevmContractWrapper,
    "FhevmCoprocessorContractWrapper",
    ()=>FhevmCoprocessorContractWrapper,
    "FhevmDecryptionOracleContractWrapper",
    ()=>FhevmDecryptionOracleContractWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FhevmContractWrapper_name;
;
;
class FhevmContractWrapper {
    get name() {
        return __classPrivateFieldGet(this, _FhevmContractWrapper_name, "f");
    }
    get properties() {
        return {
            address: this.address,
            contract: this.readonlyContract,
            package: this.package,
            contractName: this.name
        };
    }
    async _callOrThrow(p, funcName) {
        try {
            return await p;
        } catch (e) {
            console.error("invalid deployed ".concat(this.name, " contact at ").concat(this.address, ". Function ").concat(funcName, " does not exist."));
            throw e;
        }
    }
    constructor(name){
        _FhevmContractWrapper_name.set(this, void 0);
        __classPrivateFieldSet(this, _FhevmContractWrapper_name, name, "f");
    }
}
_FhevmContractWrapper_name = new WeakMap();
class FhevmCoprocessorContractWrapper extends FhevmContractWrapper {
    get package() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].FHEVM_CORE_CONTRACTS_PACKAGE_NAME;
    }
    constructor(name){
        super(name);
    }
}
class FhevmDecryptionOracleContractWrapper extends FhevmContractWrapper {
    get package() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ZAMA_FHE_ORACLE_SOLIDITY_PACKAGE_NAME;
    }
    constructor(name){
        super(name);
    }
} //# sourceMappingURL=FhevmContractWrapper.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/ACL.itf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACLInterfaceVersion",
    ()=>ACLInterfaceVersion,
    "ACLPartialInterface",
    ()=>ACLPartialInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
const ACLInterfaceVersion = "0.8.0-0";
const ACLPartialInterface = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Interface([
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address"
            }
        ],
        name: "AddressEmptyCode",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "delegatee",
                type: "address"
            },
            {
                internalType: "address",
                name: "contractAddress",
                type: "address"
            }
        ],
        name: "AlreadyDelegated",
        type: "error"
    },
    {
        inputs: [],
        name: "ContractAddressesIsEmpty",
        type: "error"
    },
    {
        inputs: [],
        name: "ContractAddressesMaxLengthExceeded",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "ERC1967InvalidImplementation",
        type: "error"
    },
    {
        inputs: [],
        name: "ERC1967NonPayable",
        type: "error"
    },
    {
        inputs: [],
        name: "EnforcedPause",
        type: "error"
    },
    {
        inputs: [],
        name: "ExpectedPause",
        type: "error"
    },
    {
        inputs: [],
        name: "FailedCall",
        type: "error"
    },
    {
        inputs: [],
        name: "HandlesListIsEmpty",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidInitialization",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidNullPauser",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "delegatee",
                type: "address"
            },
            {
                internalType: "address",
                name: "contractAddress",
                type: "address"
            }
        ],
        name: "NotDelegatedYet",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializing",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializingFromEmptyProxy",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "NotPauser",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "OwnableInvalidOwner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "contractAddress",
                type: "address"
            }
        ],
        name: "SenderCannotBeContractAddress",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "SenderNotAllowed",
        type: "error"
    },
    {
        inputs: [],
        name: "UUPSUnauthorizedCallContext",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "slot",
                type: "bytes32"
            }
        ],
        name: "UUPSUnsupportedProxiableUUID",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "handle",
                type: "bytes32"
            }
        ],
        name: "Allowed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32[]",
                name: "handlesList",
                type: "bytes32[]"
            }
        ],
        name: "AllowedForDecryption",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "version",
                type: "uint64"
            }
        ],
        name: "Initialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "delegatee",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "contractAddresses",
                type: "address[]"
            }
        ],
        name: "NewDelegation",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferStarted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "Paused",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "delegatee",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "contractAddresses",
                type: "address[]"
            }
        ],
        name: "RevokedDelegation",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "Unpaused",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newPauser",
                type: "address"
            }
        ],
        name: "UpdatePauser",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "Upgraded",
        type: "event"
    },
    {
        inputs: [],
        name: "UPGRADE_INTERFACE_VERSION",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "handle",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "allow",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "handlesList",
                type: "bytes32[]"
            }
        ],
        name: "allowForDecryption",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "handle",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "allowTransient",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "delegatee",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "handle",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "contractAddress",
                type: "address"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "allowedOnBehalf",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "handle",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "allowedTransient",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "cleanTransientStorage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "delegatee",
                type: "address"
            },
            {
                internalType: "address[]",
                name: "contractAddresses",
                type: "address[]"
            }
        ],
        name: "delegateAccount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getFHEVMExecutorAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getPauser",
        outputs: [
            {
                internalType: "address",
                name: "pauser",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getVersion",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "initialPauser",
                type: "address"
            }
        ],
        name: "initializeFromEmptyProxy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "handle",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "isAllowed",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "handle",
                type: "bytes32"
            }
        ],
        name: "isAllowedForDecryption",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "paused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pendingOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "handle",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "persistAllowed",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "initialPauser",
                type: "address"
            }
        ],
        name: "reinitializeV2",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "delegatee",
                type: "address"
            },
            {
                internalType: "address[]",
                name: "contractAddresses",
                type: "address[]"
            }
        ],
        name: "revokeDelegation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newPauser",
                type: "address"
            }
        ],
        name: "updatePauser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    }
]); //# sourceMappingURL=ACL.itf.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/ACL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACL",
    ()=>ACL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$ACL$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/ACL.itf.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ACL_aclReadOnlyContract, _ACL_aclContractAddress, _ACL_fhevmExecutorAddress, _ACL_version;
;
;
;
;
;
;
class ACL extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmCoprocessorContractWrapper"] {
    static async create(runner, aclContractAddress, abi, properties) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(aclContractAddress, "aclContractAddress");
        const acl = new ACL();
        __classPrivateFieldSet(acl, _ACL_aclContractAddress, aclContractAddress, "f");
        __classPrivateFieldSet(acl, _ACL_aclReadOnlyContract, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(aclContractAddress, abi !== null && abi !== void 0 ? abi : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$ACL$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACLPartialInterface"], runner), "f");
        __classPrivateFieldSet(acl, _ACL_fhevmExecutorAddress, properties === null || properties === void 0 ? void 0 : properties.fhevmExecutorAddress, "f");
        __classPrivateFieldSet(acl, _ACL_version, properties === null || properties === void 0 ? void 0 : properties.version, "f");
        await acl._initialize();
        return acl;
    }
    get readonlyContract() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _ACL_aclReadOnlyContract, "f") !== undefined, "ACL wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _ACL_aclReadOnlyContract, "f");
    }
    get interface() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _ACL_aclReadOnlyContract, "f") !== undefined, "ACL wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _ACL_aclReadOnlyContract, "f").interface;
    }
    get address() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _ACL_aclContractAddress, "f") !== undefined, "ACL wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _ACL_aclContractAddress, "f");
    }
    get version() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _ACL_version, "f") !== undefined, "ACL wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _ACL_version, "f");
    }
    get fhevmExecutorAddress() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _ACL_fhevmExecutorAddress, "f") !== undefined, "ACL wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _ACL_fhevmExecutorAddress, "f");
    }
    async _initialize() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _ACL_aclReadOnlyContract, "f") !== undefined, "ACL wrapper is not yet initialized");
        if (!__classPrivateFieldGet(this, _ACL_fhevmExecutorAddress, "f")) {
            __classPrivateFieldSet(this, _ACL_fhevmExecutorAddress, await __classPrivateFieldGet(this, _ACL_aclReadOnlyContract, "f").getFHEVMExecutorAddress(), "f");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(__classPrivateFieldGet(this, _ACL_fhevmExecutorAddress, "f"), "fhemExecutorAddress");
        if (!__classPrivateFieldGet(this, _ACL_version, "f")) {
            __classPrivateFieldSet(this, _ACL_version, await __classPrivateFieldGet(this, _ACL_aclReadOnlyContract, "f").getVersion(), "f");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(__classPrivateFieldGet(this, _ACL_version, "f"), "version");
    }
    async checkIsAllowedForDecryption(handlesBytes32Hex, readonlyProvider) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _ACL_aclReadOnlyContract, "f") !== undefined, "ACL wrapper is not yet initialized");
        const c = __classPrivateFieldGet(this, _ACL_aclReadOnlyContract, "f").connect(readonlyProvider);
        const isAllowedForDec = await Promise.all(handlesBytes32Hex.map(async (handleBytes32Hex)=>c.isAllowedForDecryption(handleBytes32Hex)));
        for(let i = 0; i < isAllowedForDec.length; ++i){
            if (!isAllowedForDec[i]) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Handle ".concat(handlesBytes32Hex[i], " is not authorized for decryption"));
            }
        }
    }
    constructor(){
        super("ACL");
        _ACL_aclReadOnlyContract.set(this, void 0);
        _ACL_aclContractAddress.set(this, void 0);
        _ACL_fhevmExecutorAddress.set(this, void 0);
        _ACL_version.set(this, void 0);
    }
}
_ACL_aclReadOnlyContract = new WeakMap(), _ACL_aclContractAddress = new WeakMap(), _ACL_fhevmExecutorAddress = new WeakMap(), _ACL_version = new WeakMap(); //# sourceMappingURL=ACL.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/FHEVMExecutor.itf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FHEVMExecutorInterfaceVersion",
    ()=>FHEVMExecutorInterfaceVersion,
    "FHEVMExecutorPartialInterface",
    ()=>FHEVMExecutorPartialInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
const FHEVMExecutorInterfaceVersion = "0.8.0-0";
const FHEVMExecutorPartialInterface = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Interface([
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "handle",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "ACLNotAllowed",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address"
            }
        ],
        name: "AddressEmptyCode",
        type: "error"
    },
    {
        inputs: [],
        name: "DivisionByZero",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "ERC1967InvalidImplementation",
        type: "error"
    },
    {
        inputs: [],
        name: "ERC1967NonPayable",
        type: "error"
    },
    {
        inputs: [],
        name: "FailedCall",
        type: "error"
    },
    {
        inputs: [],
        name: "IncompatibleTypes",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "typeOf",
                type: "uint8"
            },
            {
                internalType: "uint256",
                name: "length",
                type: "uint256"
            }
        ],
        name: "InvalidByteLength",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidInitialization",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidType",
        type: "error"
    },
    {
        inputs: [],
        name: "IsNotScalar",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "NotHostOwner",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializing",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializingFromEmptyProxy",
        type: "error"
    },
    {
        inputs: [],
        name: "NotPowerOfTwo",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "OwnableInvalidOwner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error"
    },
    {
        inputs: [],
        name: "SecondOperandIsNotScalar",
        type: "error"
    },
    {
        inputs: [],
        name: "UUPSUnauthorizedCallContext",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "slot",
                type: "bytes32"
            }
        ],
        name: "UUPSUnsupportedProxiableUUID",
        type: "error"
    },
    {
        inputs: [],
        name: "UnsupportedType",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "ct",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "enum FheType",
                name: "toType",
                type: "uint8"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "Cast",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheAdd",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheBitAnd",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheBitOr",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheBitXor",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheDiv",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheEq",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheGe",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheGt",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "control",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "ifTrue",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "ifFalse",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheIfThenElse",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheLe",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheLt",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheMax",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheMin",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheMul",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheNe",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "ct",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheNeg",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "ct",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheNot",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "enum FheType",
                name: "randType",
                type: "uint8"
            },
            {
                indexed: false,
                internalType: "bytes16",
                name: "seed",
                type: "bytes16"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheRand",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "upperBound",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "enum FheType",
                name: "randType",
                type: "uint8"
            },
            {
                indexed: false,
                internalType: "bytes16",
                name: "seed",
                type: "bytes16"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheRandBounded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheRem",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheRotl",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheRotr",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheShl",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheShr",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "FheSub",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "version",
                type: "uint64"
            }
        ],
        name: "Initialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferStarted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "pt",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "enum FheType",
                name: "toType",
                type: "uint8"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "TrivialEncrypt",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "Upgraded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "inputHandle",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "address",
                name: "userAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "inputProof",
                type: "bytes"
            },
            {
                indexed: false,
                internalType: "enum FheType",
                name: "inputType",
                type: "uint8"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "VerifyCiphertext",
        type: "event"
    },
    {
        inputs: [],
        name: "UPGRADE_INTERFACE_VERSION",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "ct",
                type: "bytes32"
            },
            {
                internalType: "enum FheType",
                name: "toType",
                type: "uint8"
            }
        ],
        name: "cast",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheAdd",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheBitAnd",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheBitOr",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheBitXor",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheDiv",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheEq",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheGe",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheGt",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "control",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "ifTrue",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "ifFalse",
                type: "bytes32"
            }
        ],
        name: "fheIfThenElse",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheLe",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheLt",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheMax",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheMin",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheMul",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheNe",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "ct",
                type: "bytes32"
            }
        ],
        name: "fheNeg",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "ct",
                type: "bytes32"
            }
        ],
        name: "fheNot",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "randType",
                type: "uint8"
            }
        ],
        name: "fheRand",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "upperBound",
                type: "uint256"
            },
            {
                internalType: "enum FheType",
                name: "randType",
                type: "uint8"
            }
        ],
        name: "fheRandBounded",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheRem",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheRotl",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheRotr",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheShl",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheShr",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheSub",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getACLAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getHCULimitAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getHandleVersion",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "getInputVerifierAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getVersion",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "initializeFromEmptyProxy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pendingOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "reinitializeV3",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pt",
                type: "uint256"
            },
            {
                internalType: "enum FheType",
                name: "toType",
                type: "uint8"
            }
        ],
        name: "trivialEncrypt",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "inputHandle",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "userAddress",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "inputProof",
                type: "bytes"
            },
            {
                internalType: "enum FheType",
                name: "inputType",
                type: "uint8"
            }
        ],
        name: "verifyCiphertext",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
]); //# sourceMappingURL=FHEVMExecutor.itf.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FHEVMExecutor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FHEVMExecutor",
    ()=>FHEVMExecutor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$FHEVMExecutor$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/FHEVMExecutor.itf.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FHEVMExecutor_fhevmExecutorReadonlyContract, _FHEVMExecutor_fhevmExecutorContractAddress, _FHEVMExecutor_aclAddress, _FHEVMExecutor_hcuLimitAddress, _FHEVMExecutor_inputVerifierAddress, _FHEVMExecutor_version;
;
;
;
;
;
;
class FHEVMExecutor extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmCoprocessorContractWrapper"] {
    static async create(runner, fhevmExecutorContractAddress, abi, properties) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(fhevmExecutorContractAddress, "fhevmExecutorContractAddress");
        const fhevmExecutor = new FHEVMExecutor();
        __classPrivateFieldSet(fhevmExecutor, _FHEVMExecutor_fhevmExecutorContractAddress, fhevmExecutorContractAddress, "f");
        __classPrivateFieldSet(fhevmExecutor, _FHEVMExecutor_fhevmExecutorReadonlyContract, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(fhevmExecutorContractAddress, abi !== null && abi !== void 0 ? abi : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$FHEVMExecutor$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVMExecutorPartialInterface"], runner), "f");
        __classPrivateFieldSet(fhevmExecutor, _FHEVMExecutor_aclAddress, properties === null || properties === void 0 ? void 0 : properties.aclAddress, "f");
        __classPrivateFieldSet(fhevmExecutor, _FHEVMExecutor_hcuLimitAddress, properties === null || properties === void 0 ? void 0 : properties.hcuLimitAddress, "f");
        __classPrivateFieldSet(fhevmExecutor, _FHEVMExecutor_inputVerifierAddress, properties === null || properties === void 0 ? void 0 : properties.inputVerifierAddress, "f");
        __classPrivateFieldSet(fhevmExecutor, _FHEVMExecutor_version, properties === null || properties === void 0 ? void 0 : properties.version, "f");
        await fhevmExecutor._initialize();
        return fhevmExecutor;
    }
    get readonlyContract() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FHEVMExecutor_fhevmExecutorReadonlyContract, "f") !== undefined, "FHEVMExecutor wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _FHEVMExecutor_fhevmExecutorReadonlyContract, "f");
    }
    get interface() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FHEVMExecutor_fhevmExecutorReadonlyContract, "f") !== undefined, "FHEVMExecutor wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _FHEVMExecutor_fhevmExecutorReadonlyContract, "f").interface;
    }
    get address() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FHEVMExecutor_fhevmExecutorContractAddress, "f") !== undefined, "FHEVMExecutor wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _FHEVMExecutor_fhevmExecutorContractAddress, "f");
    }
    get version() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FHEVMExecutor_version, "f") !== undefined, "FHEVMExecutor wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _FHEVMExecutor_version, "f");
    }
    get aclAddress() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FHEVMExecutor_aclAddress, "f") !== undefined, "FHEVMExecutor wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _FHEVMExecutor_aclAddress, "f");
    }
    get hcuLimitAddress() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FHEVMExecutor_hcuLimitAddress, "f") !== undefined, "FHEVMExecutor wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _FHEVMExecutor_hcuLimitAddress, "f");
    }
    get inputVerifierAddress() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FHEVMExecutor_inputVerifierAddress, "f") !== undefined, "FHEVMExecutor wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _FHEVMExecutor_inputVerifierAddress, "f");
    }
    async _initialize() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FHEVMExecutor_fhevmExecutorReadonlyContract, "f") !== undefined, "FHEVMExecutor wrapper is not initialized");
        if (!__classPrivateFieldGet(this, _FHEVMExecutor_aclAddress, "f")) {
            __classPrivateFieldSet(this, _FHEVMExecutor_aclAddress, await this._callOrThrow(__classPrivateFieldGet(this, _FHEVMExecutor_fhevmExecutorReadonlyContract, "f").getACLAddress(), "getACLAddress()"), "f");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(__classPrivateFieldGet(this, _FHEVMExecutor_aclAddress, "f"), "aclAddress");
        if (!__classPrivateFieldGet(this, _FHEVMExecutor_hcuLimitAddress, "f")) {
            __classPrivateFieldSet(this, _FHEVMExecutor_hcuLimitAddress, await this._callOrThrow(__classPrivateFieldGet(this, _FHEVMExecutor_fhevmExecutorReadonlyContract, "f").getHCULimitAddress(), "getHCULimitAddress()"), "f");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(__classPrivateFieldGet(this, _FHEVMExecutor_hcuLimitAddress, "f"), "hcuLimitAddress");
        if (!__classPrivateFieldGet(this, _FHEVMExecutor_inputVerifierAddress, "f")) {
            __classPrivateFieldSet(this, _FHEVMExecutor_inputVerifierAddress, await this._callOrThrow(__classPrivateFieldGet(this, _FHEVMExecutor_fhevmExecutorReadonlyContract, "f").getInputVerifierAddress(), "getInputVerifierAddress()"), "f");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(__classPrivateFieldGet(this, _FHEVMExecutor_inputVerifierAddress, "f"), "inputVerifierAddress");
        if (!__classPrivateFieldGet(this, _FHEVMExecutor_version, "f")) {
            __classPrivateFieldSet(this, _FHEVMExecutor_version, await this._callOrThrow(__classPrivateFieldGet(this, _FHEVMExecutor_fhevmExecutorReadonlyContract, "f").getVersion(), "getVersion()"), "f");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(__classPrivateFieldGet(this, _FHEVMExecutor_version, "f"), "version");
    }
    constructor(){
        super("FHEVMExecutor");
        _FHEVMExecutor_fhevmExecutorReadonlyContract.set(this, void 0);
        _FHEVMExecutor_fhevmExecutorContractAddress.set(this, void 0);
        _FHEVMExecutor_aclAddress.set(this, void 0);
        _FHEVMExecutor_hcuLimitAddress.set(this, void 0);
        _FHEVMExecutor_inputVerifierAddress.set(this, void 0);
        _FHEVMExecutor_version.set(this, void 0);
    }
}
_FHEVMExecutor_fhevmExecutorReadonlyContract = new WeakMap(), _FHEVMExecutor_fhevmExecutorContractAddress = new WeakMap(), _FHEVMExecutor_aclAddress = new WeakMap(), _FHEVMExecutor_hcuLimitAddress = new WeakMap(), _FHEVMExecutor_inputVerifierAddress = new WeakMap(), _FHEVMExecutor_version = new WeakMap(); //# sourceMappingURL=FHEVMExecutor.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/HCULimit.itf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HCULimitInterfaceVersion",
    ()=>HCULimitInterfaceVersion,
    "HCULimitPartialInterface",
    ()=>HCULimitPartialInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
const HCULimitInterfaceVersion = "0.8.0-0";
const HCULimitPartialInterface = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Interface([
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address"
            }
        ],
        name: "AddressEmptyCode",
        type: "error"
    },
    {
        inputs: [],
        name: "CallerMustBeFHEVMExecutorContract",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "ERC1967InvalidImplementation",
        type: "error"
    },
    {
        inputs: [],
        name: "ERC1967NonPayable",
        type: "error"
    },
    {
        inputs: [],
        name: "FailedCall",
        type: "error"
    },
    {
        inputs: [],
        name: "HCUTransactionDepthLimitExceeded",
        type: "error"
    },
    {
        inputs: [],
        name: "HCUTransactionLimitExceeded",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidInitialization",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "NotHostOwner",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializing",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializingFromEmptyProxy",
        type: "error"
    },
    {
        inputs: [],
        name: "OnlyScalarOperationsAreSupported",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "OwnableInvalidOwner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error"
    },
    {
        inputs: [],
        name: "UUPSUnauthorizedCallContext",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "slot",
                type: "bytes32"
            }
        ],
        name: "UUPSUnsupportedProxiableUUID",
        type: "error"
    },
    {
        inputs: [],
        name: "UnsupportedOperation",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "version",
                type: "uint64"
            }
        ],
        name: "Initialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferStarted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "Upgraded",
        type: "event"
    },
    {
        inputs: [],
        name: "UPGRADE_INTERFACE_VERSION",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes32",
                name: "ct",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForCast",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheAdd",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheBitAnd",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheBitOr",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheBitXor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheDiv",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheEq",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheGe",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheGt",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheLe",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheLt",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheMax",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheMin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheMul",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheNe",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes32",
                name: "ct",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheNeg",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes32",
                name: "ct",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheNot",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheRand",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheRandBounded",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheRem",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheRotl",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheRotr",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheShl",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheShr",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForFheSub",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "middle",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForIfThenElse",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "resultType",
                type: "uint8"
            },
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        name: "checkHCUForTrivialEncrypt",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getFHEVMExecutorAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getVersion",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "initializeFromEmptyProxy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pendingOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "reinitializeV4",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    }
]); //# sourceMappingURL=HCULimit.itf.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/HCULimit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HCULimit",
    ()=>HCULimit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$HCULimit$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/HCULimit.itf.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HCULimit_hcuLimitContract, _HCULimit_hcuLimitContractAddress, _HCULimit_fhemExecutorAddress, _HCULimit_version;
;
;
;
;
;
;
class HCULimit extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmCoprocessorContractWrapper"] {
    static async create(runner, hcuLimitContractAddress, abi, properties) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(hcuLimitContractAddress, "hcuLimitContractAddress");
        if (properties !== undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Not yet implemented");
        }
        const hcuLimit = new HCULimit();
        __classPrivateFieldSet(hcuLimit, _HCULimit_hcuLimitContractAddress, hcuLimitContractAddress, "f");
        __classPrivateFieldSet(hcuLimit, _HCULimit_hcuLimitContract, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(hcuLimitContractAddress, abi !== null && abi !== void 0 ? abi : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$HCULimit$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HCULimitPartialInterface"], runner), "f");
        await hcuLimit._initialize();
        return hcuLimit;
    }
    get readonlyContract() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _HCULimit_hcuLimitContract, "f") !== undefined, "HCULimit wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _HCULimit_hcuLimitContract, "f");
    }
    get interface() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _HCULimit_hcuLimitContract, "f") !== undefined, "HCULimit wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _HCULimit_hcuLimitContract, "f").interface;
    }
    get address() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _HCULimit_hcuLimitContractAddress, "f") !== undefined, "HCULimit wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _HCULimit_hcuLimitContractAddress, "f");
    }
    get version() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _HCULimit_version, "f") !== undefined, "HCULimit wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _HCULimit_version, "f");
    }
    get fhemExecutorAddress() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _HCULimit_fhemExecutorAddress, "f") !== undefined, "HCULimit wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _HCULimit_fhemExecutorAddress, "f");
    }
    async _initialize() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _HCULimit_hcuLimitContract, "f") !== undefined, "HCULimit wrapper is not yet initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _HCULimit_fhemExecutorAddress, "f") === undefined, "HCULimit wrapper already initialized");
        __classPrivateFieldSet(this, _HCULimit_fhemExecutorAddress, await __classPrivateFieldGet(this, _HCULimit_hcuLimitContract, "f").getFHEVMExecutorAddress(), "f");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(__classPrivateFieldGet(this, _HCULimit_fhemExecutorAddress, "f"), "fhemExecutorAddress");
        __classPrivateFieldSet(this, _HCULimit_version, await __classPrivateFieldGet(this, _HCULimit_hcuLimitContract, "f").getVersion(), "f");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(__classPrivateFieldGet(this, _HCULimit_version, "f"), "version");
    }
    constructor(){
        super("HCULimit");
        _HCULimit_hcuLimitContract.set(this, void 0);
        _HCULimit_hcuLimitContractAddress.set(this, void 0);
        _HCULimit_fhemExecutorAddress.set(this, void 0);
        _HCULimit_version.set(this, void 0);
    }
}
_HCULimit_hcuLimitContract = new WeakMap(), _HCULimit_hcuLimitContractAddress = new WeakMap(), _HCULimit_fhemExecutorAddress = new WeakMap(), _HCULimit_version = new WeakMap(); //# sourceMappingURL=HCULimit.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/eip712.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsEIP712Domain",
    ()=>assertIsEIP712Domain,
    "isThresholdReached",
    ()=>isThresholdReached,
    "multiSignEIP712",
    ()=>multiSignEIP712,
    "signEIP712",
    ()=>signEIP712
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
async function signEIP712(signer, domain, types, message) {
    const signature = await signer.signTypedData(domain, types, message);
    const sigRSV = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Signature.from(signature);
    const v = 27 + sigRSV.yParity;
    const r = sigRSV.r;
    const s = sigRSV.s;
    const result = r + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePrefix"])(s, "0x") + v.toString(16);
    return result;
}
async function multiSignEIP712(signers, domain, types, message) {
    const signatures = [];
    for(let idx = 0; idx < signers.length; idx++){
        const signer = signers[idx];
        const signature = await signEIP712(signer, domain, types, message);
        signatures.push(signature);
    }
    return signatures;
}
function assertIsEIP712Domain(eip712Domain, name, expectedDomain) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(Array.isArray(eip712Domain), "Invalid ".concat(name, " EIP712 domain"));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain.length >= 5, "Invalid ".concat(name, " EIP712 domain"));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain[1] === expectedDomain.name, "Invalid ".concat(name, " EIP712 domain name. Got ").concat(eip712Domain[1], ", expected ").concat(expectedDomain.name));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain[2] === expectedDomain.version, "Invalid ".concat(name, " EIP712 domain name. Got ").concat(eip712Domain[2], ", expected ").concat(expectedDomain.version));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain[3] === expectedDomain.chainId, "Invalid ".concat(name, " EIP712 domain name. Got ").concat(eip712Domain[3], ", expected ").concat(expectedDomain.chainId));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain[4] === expectedDomain.verifyingContract, "Invalid ".concat(name, " EIP712 domain name. Got ").concat(eip712Domain[4], ", expected ").concat(expectedDomain.verifyingContract));
}
function isThresholdReached(signersAddress, recoveredAddresses, threshold, signerType) {
    const addressMap = new Map();
    recoveredAddresses.forEach((address, index)=>{
        if (addressMap.has(address)) {
            const duplicateValue = address;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Duplicate ".concat(signerType, " signer address found: ").concat(duplicateValue, " appears multiple times in recovered addresses"));
        }
        addressMap.set(address, index);
    });
    for (const address of recoveredAddresses){
        if (!signersAddress.includes(address)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid address found: ".concat(address, " is not in the list of ").concat(signerType, " signers"));
        }
    }
    return recoveredAddresses.length >= threshold;
} //# sourceMappingURL=eip712.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsBytes",
    ()=>assertIsBytes,
    "assertIsBytes1",
    ()=>assertIsBytes1,
    "assertIsBytes20",
    ()=>assertIsBytes20,
    "assertIsBytes32",
    ()=>assertIsBytes32,
    "assertIsBytes32String",
    ()=>assertIsBytes32String,
    "assertIsBytes8",
    ()=>assertIsBytes8,
    "assertIsBytesLike",
    ()=>assertIsBytesLike,
    "assertIsBytesString",
    ()=>assertIsBytesString,
    "assertIsUint8Array",
    ()=>assertIsUint8Array,
    "bytesToBigInt",
    ()=>bytesToBigInt,
    "concatBytes",
    ()=>concatBytes,
    "uintToBytes",
    ()=>uintToBytes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
function assertIsUint8Array(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(value instanceof Uint8Array, "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not of type Uint8Array"));
}
function assertIsBytesLike(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isBytesLike(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not bytes-like (expected a hex string or Uint8Array)"));
}
function assertIsBytes32String(value, valueName) {
    assertIsBytesString(value, 32, valueName);
}
function assertIsBytesString(value, width, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(value, valueName);
    if (width === undefined) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isBytesLike(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " : ").concat(value, " is not a valid bytes string"));
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(value === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(value, width), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " : ").concat(value, " is not a valid bytes").concat(width, " string"));
    }
}
function assertIsBytes1(value, valueName) {
    assertIsBytes(value, 1, valueName);
}
function assertIsBytes8(value, valueName) {
    assertIsBytes(value, 8, valueName);
}
function assertIsBytes20(value, valueName) {
    assertIsBytes(value, 20, valueName);
}
function assertIsBytes32(value, valueName) {
    assertIsBytes(value, 32, valueName);
}
function assertIsBytes(value, width, valueName) {
    assertIsUint8Array(value, valueName);
    if (width === undefined) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isBytesLike(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " : ").concat(value, " is not a valid bytes string"));
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(value.length === width, "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " : ").concat(value, " is not a valid bytes").concat(width, " Uint8Array. Expecting length ").concat(width, ", got ").concat(value.length, " instead"));
    }
}
function bytesToBigInt(byteArray) {
    if (!byteArray || byteArray.length === 0) {
        return BigInt(0);
    }
    /*
    
      Equivalent to:
      ==============
  
      // faster: using C/C++ lib bigint-buffer
      import { toBigIntBE } from "bigint-buffer";
      // Buffer: Node only
      const buffer = Buffer.from(byteArray);
      const result = toBigIntBE(buffer);
      return new Uint8Array(toBufferBE(value, 64));
  
    */ return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBigInt(byteArray);
}
function uintToBytes(value, width) {
    // May be using EthersT.toBeArray(value) is more efficient.
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(value, width));
}
function concatBytes() {
    for(var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++){
        arrays[_key] = arguments[_key];
    }
    const totalLength = arrays.reduce((sum, arr)=>sum + arr.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const arr of arrays){
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
} //# sourceMappingURL=bytes.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/hex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsHexString",
    ()=>assertIsHexString,
    "fromHexString",
    ()=>fromHexString,
    "numberToEvenHexString",
    ()=>numberToEvenHexString,
    "numberToHexNoPrefix",
    ()=>numberToHexNoPrefix,
    "toHexString",
    ()=>toHexString,
    "uint8ArrayToHexNoPrefix",
    ()=>uint8ArrayToHexNoPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
function uint8ArrayToHexNoPrefix(uint8Array) {
    //return EthersT.hexlify(uint8Array).slice(2);
    return Array.from(uint8Array).map((byte)=>byte.toString(16).padStart(2, "0")).join("");
}
function numberToHexNoPrefix(num) {
    const hex = num.toString(16);
    return hex.length % 2 ? "0" + hex : hex;
}
function numberToEvenHexString(num) {
    if (typeof num !== "number" || num < 0) {
        throw new Error("Input should be a non-negative number.");
    }
    let hexString = num.toString(16);
    if (hexString.length % 2 !== 0) {
        hexString = "0" + hexString;
    }
    return hexString;
}
const fromHexString = (hexString)=>{
    const arr = hexString.replace(/^(0x)/, "").match(/.{1,2}/g);
    if (!arr) return new Uint8Array();
    return Uint8Array.from(arr.map((byte)=>parseInt(byte, 16)));
};
const toHexString = (bytes)=>"0x".concat(bytes.reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), ""));
function assertIsHexString(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(value, valueName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isHexString(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", ": ").concat(value, " is not a valid hex string."));
} //# sourceMappingURL=hex.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/InputVerifier.itf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputVerifierInterfaceVersion",
    ()=>InputVerifierInterfaceVersion,
    "InputVerifierPartialInterface",
    ()=>InputVerifierPartialInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
const InputVerifierInterfaceVersion = "0.8.0-0";
const InputVerifierPartialInterface = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Interface([
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address"
            }
        ],
        name: "AddressEmptyCode",
        type: "error"
    },
    {
        inputs: [],
        name: "AlreadySigner",
        type: "error"
    },
    {
        inputs: [],
        name: "AtLeastOneSignerIsRequired",
        type: "error"
    },
    {
        inputs: [],
        name: "DeserializingInputProofFail",
        type: "error"
    },
    {
        inputs: [],
        name: "ECDSAInvalidSignature",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "length",
                type: "uint256"
            }
        ],
        name: "ECDSAInvalidSignatureLength",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            }
        ],
        name: "ECDSAInvalidSignatureS",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "ERC1967InvalidImplementation",
        type: "error"
    },
    {
        inputs: [],
        name: "ERC1967NonPayable",
        type: "error"
    },
    {
        inputs: [],
        name: "EmptyInputProof",
        type: "error"
    },
    {
        inputs: [],
        name: "FailedCall",
        type: "error"
    },
    {
        inputs: [],
        name: "InitialSignersSetIsEmpty",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidChainId",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidHandleVersion",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidIndex",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidInitialization",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidInputHandle",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signerRecovered",
                type: "address"
            }
        ],
        name: "InvalidSigner",
        type: "error"
    },
    {
        inputs: [],
        name: "NotASigner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "NotHostOwner",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializing",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializingFromEmptyProxy",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "OwnableInvalidOwner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "numSignatures",
                type: "uint256"
            }
        ],
        name: "SignatureThresholdNotReached",
        type: "error"
    },
    {
        inputs: [],
        name: "SignaturesVerificationFailed",
        type: "error"
    },
    {
        inputs: [],
        name: "SignerNull",
        type: "error"
    },
    {
        inputs: [],
        name: "UUPSUnauthorizedCallContext",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "slot",
                type: "bytes32"
            }
        ],
        name: "UUPSUnsupportedProxiableUUID",
        type: "error"
    },
    {
        inputs: [],
        name: "ZeroSignature",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [],
        name: "EIP712DomainChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "version",
                type: "uint64"
            }
        ],
        name: "Initialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferStarted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "signer",
                type: "address"
            }
        ],
        name: "SignerAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "signer",
                type: "address"
            }
        ],
        name: "SignerRemoved",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "Upgraded",
        type: "event"
    },
    {
        inputs: [],
        name: "EIP712_INPUT_VERIFICATION_TYPE",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "EIP712_INPUT_VERIFICATION_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "UPGRADE_INTERFACE_VERSION",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signer",
                type: "address"
            }
        ],
        name: "addSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "cleanTransientStorage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "eip712Domain",
        outputs: [
            {
                internalType: "bytes1",
                name: "fields",
                type: "bytes1"
            },
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "version",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "verifyingContract",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32"
            },
            {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getCoprocessorSigners",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getHandleVersion",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "getThreshold",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getVersion",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "verifyingContractSource",
                type: "address"
            },
            {
                internalType: "uint64",
                name: "chainIDSource",
                type: "uint64"
            },
            {
                internalType: "address[]",
                name: "initialSigners",
                type: "address[]"
            }
        ],
        name: "initializeFromEmptyProxy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "isSigner",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pendingOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "reinitializeV3",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signer",
                type: "address"
            }
        ],
        name: "removeSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "userAddress",
                        type: "address"
                    },
                    {
                        internalType: "address",
                        name: "contractAddress",
                        type: "address"
                    }
                ],
                internalType: "struct FHEVMExecutor.ContextUserInputs",
                name: "context",
                type: "tuple"
            },
            {
                internalType: "bytes32",
                name: "inputHandle",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "inputProof",
                type: "bytes"
            }
        ],
        name: "verifyCiphertext",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
]); //# sourceMappingURL=InputVerifier.itf.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/InputVerifier.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputVerifier",
    ()=>InputVerifier,
    "computeInputProofHex",
    ()=>computeInputProofHex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$InputVerifier$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/InputVerifier.itf.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InputVerifier_inputVerifierReadonlyContract, _InputVerifier_inputVerifierContractAddress, _InputVerifier_signersAddresses, _InputVerifier_threshold, _InputVerifier_eip712Domain;
;
;
;
;
;
;
;
;
;
;
;
class InputVerifier extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmCoprocessorContractWrapper"] {
    static async create(runner, inputVerifierContractAddress, abi, properties) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(inputVerifierContractAddress, "inputVerifierContractAddress");
        const inputVerifier = new InputVerifier();
        __classPrivateFieldSet(inputVerifier, _InputVerifier_inputVerifierContractAddress, inputVerifierContractAddress, "f");
        __classPrivateFieldSet(inputVerifier, _InputVerifier_inputVerifierReadonlyContract, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(inputVerifierContractAddress, abi !== null && abi !== void 0 ? abi : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$InputVerifier$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputVerifierPartialInterface"], runner), "f");
        __classPrivateFieldSet(inputVerifier, _InputVerifier_eip712Domain, properties === null || properties === void 0 ? void 0 : properties.eip712Domain, "f");
        __classPrivateFieldSet(inputVerifier, _InputVerifier_signersAddresses, properties === null || properties === void 0 ? void 0 : properties.signersAddresses, "f");
        __classPrivateFieldSet(inputVerifier, _InputVerifier_threshold, properties === null || properties === void 0 ? void 0 : properties.threshold, "f");
        await inputVerifier._initialize();
        return inputVerifier;
    }
    get readonlyContract() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f") !== undefined, "InputVerifier wrapper is not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f");
    }
    get interface() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f") !== undefined, "InputVerifier wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f").interface;
    }
    async _initialize() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f") !== undefined, "InputVerifier wrapper is not initialized");
        if (!__classPrivateFieldGet(this, _InputVerifier_signersAddresses, "f")) {
            const signers = await __classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f").getCoprocessorSigners();
            __classPrivateFieldSet(this, _InputVerifier_signersAddresses, signers, "f");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddressArray"])(__classPrivateFieldGet(this, _InputVerifier_signersAddresses, "f"));
        if (__classPrivateFieldGet(this, _InputVerifier_threshold, "f") === undefined) {
            const threshold = await __classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f").getThreshold();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBigUint8"])(threshold);
            __classPrivateFieldSet(this, _InputVerifier_threshold, Number(threshold), "f");
        }
        if (__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f") === undefined) {
            // ignore extensions
            const eip712Domain = await __classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f").eip712Domain();
            // Add extra checks (in case EIP712 are changing)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain.length === 7);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(eip712Domain[0], "eip712Domain[0]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(eip712Domain[1], "eip712Domain[1]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(eip712Domain[2], "eip712Domain[2]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBigUint256"])(eip712Domain[3], "eip712Domain[3]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(eip712Domain[4], "eip712Domain[4]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32String"])(eip712Domain[5], "eip712Domain[5]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(Array.isArray(eip712Domain[6]) && eip712Domain[6].length === 0, "eip712Domain[6]");
            __classPrivateFieldSet(this, _InputVerifier_eip712Domain, {
                fields: Number(BigInt(eip712Domain[0])),
                name: eip712Domain[1],
                version: eip712Domain[2],
                chainId: eip712Domain[3],
                verifyingContract: eip712Domain[4],
                salt: eip712Domain[5]
            }, "f");
        }
        // Add extra checks (in case EIP712 are chanbging)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f").fields === Number(0x0f));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f").salt === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f").name === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].INPUT_VERIFICATION_EIP712.domain.name);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f").version === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].INPUT_VERIFICATION_EIP712.domain.version);
    }
    get address() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_inputVerifierContractAddress, "f") !== undefined, "InputVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_inputVerifierContractAddress, "f");
    }
    // The InputVerifier is always using the gatewayChainId in its eip712 domain
    get gatewayChainId() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f") !== undefined, "InputVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f").chainId;
    }
    // The InputVerifier is always using the address of the "InputVerification.sol" contract deployed
    // on the gateway chainId in its eip712 domain
    get gatewayInputVerificationAddress() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f") !== undefined, "InputVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f").verifyingContract;
    }
    get eip712Domain() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f") !== undefined, "InputVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f");
    }
    getCoprocessorSigners() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_signersAddresses, "f") !== undefined, "InputVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_signersAddresses, "f");
    }
    getThreshold() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_threshold, "f") !== undefined, "InputVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_threshold, "f");
    }
    async assertMatchCoprocessorSigners(signers) {
        const addresses = this.getCoprocessorSigners();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArray"])(signers, "signers");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(signers.length === addresses.length, "signers.length === addresses.length");
        for(let i = 0; i < addresses.length; ++i){
            const s = await signers[i].getAddress();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(addresses[i] === s, "addresses[".concat(i, "] === await signers[").concat(i, "].getAddress()"));
        }
    }
    verifySignatures(handlesBytes32List, userAddress, contractAddress, contractChainId, extraData, signatures) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArray"])(signatures);
        const domain = this.eip712Domain;
        const recoveredAddresses = signatures.map((signature)=>{
            const sig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensure0x"])(signature);
            const recoveredAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].verifyTypedData({
                name: domain.name,
                version: domain.version,
                chainId: domain.chainId,
                verifyingContract: domain.verifyingContract
            }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].INPUT_VERIFICATION_EIP712.types, {
                ctHandles: handlesBytes32List,
                userAddress,
                contractAddress,
                contractChainId,
                extraData
            }, sig);
            return recoveredAddress;
        });
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThresholdReached"])(this.getCoprocessorSigners(), recoveredAddresses, this.getThreshold(), "coprocessor")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Coprocessor signers threshold is not reached");
        }
    }
    // See: fhevm-gateway/contracts/InputVerification.sol
    createCiphertextVerificationEIP712(handlesBytes32List, contractChainId, contractAddress, userAddress, extraData) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(userAddress, "userAddress");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(contractAddress, "contractAddress");
        const domain = this.eip712Domain;
        const eip712 = {
            domain: {
                chainId: domain.chainId,
                name: domain.name,
                version: domain.version,
                verifyingContract: domain.verifyingContract
            },
            types: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].INPUT_VERIFICATION_EIP712.types,
            message: {
                ctHandles: handlesBytes32List.map((handle)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(handle), 32)),
                userAddress: userAddress,
                contractAddress: contractAddress,
                contractChainId: contractChainId,
                extraData
            }
        };
        return eip712;
    }
    constructor(){
        super("InputVerifier");
        _InputVerifier_inputVerifierReadonlyContract.set(this, void 0);
        _InputVerifier_inputVerifierContractAddress.set(this, void 0);
        _InputVerifier_signersAddresses.set(this, void 0);
        _InputVerifier_threshold.set(this, void 0);
        _InputVerifier_eip712Domain.set(this, void 0);
    }
}
_InputVerifier_inputVerifierReadonlyContract = new WeakMap(), _InputVerifier_inputVerifierContractAddress = new WeakMap(), _InputVerifier_signersAddresses = new WeakMap(), _InputVerifier_threshold = new WeakMap(), _InputVerifier_eip712Domain = new WeakMap();
function computeInputProofHex(handlesBytes32Hex, coprocessorsSignaturesHex, extraData) {
    const numHandles = handlesBytes32Hex.length;
    const numCoprocessorSigners = coprocessorsSignaturesHex.length;
    const numHandlesHexByte1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHexNoPrefix"])(numHandles);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(numHandlesHexByte1.length === 2); // 1 byte
    const numCoprocessorSignersHexByte1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHexNoPrefix"])(numCoprocessorSigners);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(numCoprocessorSignersHexByte1.length === 2); // 1 byte
    // Compute inputProof
    let inputProofHex = "0x" + numHandlesHexByte1 + numCoprocessorSignersHexByte1;
    // Append the list of handles
    for(let i = 0; i < numHandles; ++i){
        const handlesBytes32HexNoPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePrefix"])(handlesBytes32Hex[i], "0x");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(handlesBytes32HexNoPrefix.length === 2 * 32);
        inputProofHex += handlesBytes32HexNoPrefix;
    }
    // Append list of coprocessor signatures
    coprocessorsSignaturesHex.map((signatureHex)=>{
        const signatureBytes65HexNoPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePrefix"])(signatureHex, "0x");
        if (signatureBytes65HexNoPrefix.length !== 2 * 65) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid coprocessor signature: ".concat(signatureBytes65HexNoPrefix, ". Invalid length."));
        }
        inputProofHex += signatureBytes65HexNoPrefix;
    });
    // Append the extra data to the input proof
    inputProofHex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].concat([
        inputProofHex,
        extraData
    ]);
    return inputProofHex;
} //# sourceMappingURL=InputVerifier.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FheType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_FHE_TYPES",
    ()=>ALL_FHE_TYPES,
    "FheType",
    ()=>FheType,
    "checkFheType",
    ()=>checkFheType,
    "getFheTypeBitLength",
    ()=>getFheTypeBitLength,
    "getFheTypeByteLength",
    ()=>getFheTypeByteLength,
    "getFheTypeInfo",
    ()=>getFheTypeInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
;
;
var FheType;
(function(FheType) {
    FheType[FheType["Bool"] = 0] = "Bool";
    FheType[FheType["Uint4"] = 1] = "Uint4";
    FheType[FheType["Uint8"] = 2] = "Uint8";
    FheType[FheType["Uint16"] = 3] = "Uint16";
    FheType[FheType["Uint32"] = 4] = "Uint32";
    FheType[FheType["Uint64"] = 5] = "Uint64";
    FheType[FheType["Uint128"] = 6] = "Uint128";
    FheType[FheType["Uint160"] = 7] = "Uint160";
    FheType[FheType["Uint256"] = 8] = "Uint256";
    FheType[FheType["Uint512"] = 9] = "Uint512";
    FheType[FheType["Uint1024"] = 10] = "Uint1024";
    FheType[FheType["Uint2048"] = 11] = "Uint2048";
    FheType[FheType["Uint2"] = 12] = "Uint2";
    FheType[FheType["Uint6"] = 13] = "Uint6";
    FheType[FheType["Uint10"] = 14] = "Uint10";
    FheType[FheType["Uint12"] = 15] = "Uint12";
    FheType[FheType["Uint14"] = 16] = "Uint14";
    FheType[FheType["Int2"] = 17] = "Int2";
    FheType[FheType["Int4"] = 18] = "Int4";
    FheType[FheType["Int6"] = 19] = "Int6";
    FheType[FheType["Int8"] = 20] = "Int8";
    FheType[FheType["Int10"] = 21] = "Int10";
    FheType[FheType["Int12"] = 22] = "Int12";
    FheType[FheType["Int14"] = 23] = "Int14";
    FheType[FheType["Int16"] = 24] = "Int16";
    FheType[FheType["Int32"] = 25] = "Int32";
    FheType[FheType["Int64"] = 26] = "Int64";
    FheType[FheType["Int128"] = 27] = "Int128";
    FheType[FheType["Int160"] = 28] = "Int160";
    FheType[FheType["Int256"] = 29] = "Int256";
    FheType[FheType["AsciiString"] = 30] = "AsciiString";
    FheType[FheType["Int512"] = 31] = "Int512";
    FheType[FheType["Int1024"] = 32] = "Int1024";
    FheType[FheType["Int2048"] = 33] = "Int2048";
    FheType[FheType["Uint24"] = 34] = "Uint24";
    FheType[FheType["Uint40"] = 35] = "Uint40";
    FheType[FheType["Uint48"] = 36] = "Uint48";
    FheType[FheType["Uint56"] = 37] = "Uint56";
    FheType[FheType["Uint72"] = 38] = "Uint72";
    FheType[FheType["Uint80"] = 39] = "Uint80";
    FheType[FheType["Uint88"] = 40] = "Uint88";
    FheType[FheType["Uint96"] = 41] = "Uint96";
    FheType[FheType["Uint104"] = 42] = "Uint104";
    FheType[FheType["Uint112"] = 43] = "Uint112";
    FheType[FheType["Uint120"] = 44] = "Uint120";
    FheType[FheType["Uint136"] = 45] = "Uint136";
    FheType[FheType["Uint144"] = 46] = "Uint144";
    FheType[FheType["Uint152"] = 47] = "Uint152";
    FheType[FheType["Uint168"] = 48] = "Uint168";
    FheType[FheType["Uint176"] = 49] = "Uint176";
    FheType[FheType["Uint184"] = 50] = "Uint184";
    FheType[FheType["Uint192"] = 51] = "Uint192";
    FheType[FheType["Uint200"] = 52] = "Uint200";
    FheType[FheType["Uint208"] = 53] = "Uint208";
    FheType[FheType["Uint216"] = 54] = "Uint216";
    FheType[FheType["Uint224"] = 55] = "Uint224";
    FheType[FheType["Uint232"] = 56] = "Uint232";
    FheType[FheType["Uint240"] = 57] = "Uint240";
    FheType[FheType["Uint248"] = 58] = "Uint248";
    FheType[FheType["Int24"] = 59] = "Int24";
    FheType[FheType["Int40"] = 60] = "Int40";
    FheType[FheType["Int48"] = 61] = "Int48";
    FheType[FheType["Int56"] = 62] = "Int56";
    FheType[FheType["Int72"] = 63] = "Int72";
    FheType[FheType["Int80"] = 64] = "Int80";
    FheType[FheType["Int88"] = 65] = "Int88";
    FheType[FheType["Int96"] = 66] = "Int96";
    FheType[FheType["Int104"] = 67] = "Int104";
    FheType[FheType["Int112"] = 68] = "Int112";
    FheType[FheType["Int120"] = 69] = "Int120";
    FheType[FheType["Int136"] = 70] = "Int136";
    FheType[FheType["Int144"] = 71] = "Int144";
    FheType[FheType["Int152"] = 72] = "Int152";
    FheType[FheType["Int168"] = 73] = "Int168";
    FheType[FheType["Int176"] = 74] = "Int176";
    FheType[FheType["Int184"] = 75] = "Int184";
    FheType[FheType["Int192"] = 76] = "Int192";
    FheType[FheType["Int200"] = 77] = "Int200";
    FheType[FheType["Int208"] = 78] = "Int208";
    FheType[FheType["Int216"] = 79] = "Int216";
    FheType[FheType["Int224"] = 80] = "Int224";
    FheType[FheType["Int232"] = 81] = "Int232";
    FheType[FheType["Int240"] = 82] = "Int240";
    FheType[FheType["Int248"] = 83] = "Int248";
})(FheType || (FheType = {}));
const ALL_FHE_TYPES = [
    {
        type: "Bool",
        value: 0,
        supportedOperators: [
            "and",
            "or",
            "xor",
            "eq",
            "ne",
            "not",
            "select",
            "rand"
        ],
        bitLength: 2,
        clearMatchingType: "bool"
    },
    {
        type: "Uint4",
        value: 1,
        supportedOperators: [],
        bitLength: 4,
        clearMatchingType: "uint8"
    },
    {
        type: "Uint8",
        value: 2,
        supportedOperators: [
            "add",
            "sub",
            "mul",
            "div",
            "rem",
            "and",
            "or",
            "xor",
            "shl",
            "shr",
            "rotl",
            "rotr",
            "eq",
            "ne",
            "ge",
            "gt",
            "le",
            "lt",
            "min",
            "max",
            "neg",
            "not",
            "select",
            "rand",
            "randBounded"
        ],
        bitLength: 8,
        clearMatchingType: "uint8",
        aliases: [
            {
                type: "Bytes1",
                supportedOperators: [],
                clearMatchingType: "bytes1"
            }
        ]
    },
    {
        type: "Uint16",
        value: 3,
        supportedOperators: [
            "add",
            "sub",
            "mul",
            "div",
            "rem",
            "and",
            "or",
            "xor",
            "shl",
            "shr",
            "rotl",
            "rotr",
            "eq",
            "ne",
            "ge",
            "gt",
            "le",
            "lt",
            "min",
            "max",
            "neg",
            "not",
            "select",
            "rand",
            "randBounded"
        ],
        bitLength: 16,
        clearMatchingType: "uint16",
        aliases: [
            {
                type: "Bytes2",
                supportedOperators: [],
                clearMatchingType: "bytes2"
            }
        ]
    },
    {
        type: "Uint32",
        value: 4,
        supportedOperators: [
            "add",
            "sub",
            "mul",
            "div",
            "rem",
            "and",
            "or",
            "xor",
            "shl",
            "shr",
            "rotl",
            "rotr",
            "eq",
            "ne",
            "ge",
            "gt",
            "le",
            "lt",
            "min",
            "max",
            "neg",
            "not",
            "select",
            "rand",
            "randBounded"
        ],
        bitLength: 32,
        clearMatchingType: "uint32",
        aliases: [
            {
                type: "Bytes4",
                supportedOperators: [],
                clearMatchingType: ""
            }
        ]
    },
    {
        type: "Uint64",
        value: 5,
        supportedOperators: [
            "add",
            "sub",
            "mul",
            "div",
            "rem",
            "and",
            "or",
            "xor",
            "shl",
            "shr",
            "rotl",
            "rotr",
            "eq",
            "ne",
            "ge",
            "gt",
            "le",
            "lt",
            "min",
            "max",
            "neg",
            "not",
            "select",
            "rand",
            "randBounded"
        ],
        bitLength: 64,
        clearMatchingType: "uint64",
        aliases: [
            {
                type: "Bytes8",
                supportedOperators: [],
                clearMatchingType: "bytes8"
            }
        ]
    },
    {
        type: "Uint128",
        value: 6,
        supportedOperators: [
            "add",
            "sub",
            "mul",
            "div",
            "rem",
            "and",
            "or",
            "xor",
            "shl",
            "shr",
            "rotl",
            "rotr",
            "eq",
            "ne",
            "ge",
            "gt",
            "le",
            "lt",
            "min",
            "max",
            "neg",
            "not",
            "select",
            "rand",
            "randBounded"
        ],
        bitLength: 128,
        clearMatchingType: "uint128",
        aliases: [
            {
                type: "Bytes16",
                supportedOperators: [],
                clearMatchingType: "bytes16"
            }
        ]
    },
    {
        type: "Uint160",
        value: 7,
        supportedOperators: [],
        bitLength: 160,
        clearMatchingType: "uint160",
        aliases: [
            {
                type: "Address",
                supportedOperators: [
                    "eq",
                    "ne",
                    "select"
                ],
                clearMatchingType: "address"
            },
            {
                type: "Bytes20",
                supportedOperators: [],
                clearMatchingType: "bytes20"
            }
        ]
    },
    {
        type: "Uint256",
        value: 8,
        supportedOperators: [
            "and",
            "or",
            "xor",
            "shl",
            "shr",
            "rotl",
            "rotr",
            "eq",
            "ne",
            "neg",
            "not",
            "select",
            "rand",
            "randBounded"
        ],
        bitLength: 256,
        clearMatchingType: "uint256",
        aliases: [
            {
                type: "Bytes32",
                supportedOperators: [],
                clearMatchingType: "bytes32"
            }
        ]
    },
    {
        type: "Uint512",
        value: 9,
        supportedOperators: [],
        bitLength: 512,
        clearMatchingType: "bytes memory",
        aliases: [
            {
                type: "Bytes64",
                supportedOperators: [
                    "eq",
                    "ne",
                    "select",
                    "rand"
                ],
                clearMatchingType: ""
            }
        ]
    },
    {
        type: "Uint1024",
        value: 10,
        supportedOperators: [],
        bitLength: 1024,
        clearMatchingType: "bytes memory",
        aliases: [
            {
                type: "Bytes128",
                supportedOperators: [
                    "eq",
                    "ne",
                    "select",
                    "rand"
                ],
                clearMatchingType: ""
            }
        ]
    },
    {
        type: "Uint2048",
        value: 11,
        supportedOperators: [],
        bitLength: 2048,
        clearMatchingType: "bytes memory",
        aliases: [
            {
                type: "Bytes256",
                supportedOperators: [
                    "eq",
                    "ne",
                    "select",
                    "rand"
                ],
                clearMatchingType: ""
            }
        ]
    },
    {
        type: "Uint2",
        value: 12,
        supportedOperators: [],
        bitLength: 2,
        clearMatchingType: "uint8"
    },
    {
        type: "Uint6",
        value: 13,
        supportedOperators: [],
        bitLength: 6,
        clearMatchingType: "uint8"
    },
    {
        type: "Uint10",
        value: 14,
        supportedOperators: [],
        bitLength: 10,
        clearMatchingType: "uint16"
    },
    {
        type: "Uint12",
        value: 15,
        supportedOperators: [],
        bitLength: 12,
        clearMatchingType: "uint16"
    },
    {
        type: "Uint14",
        value: 16,
        supportedOperators: [],
        bitLength: 14,
        clearMatchingType: "uint16"
    },
    {
        type: "Int2",
        value: 17,
        supportedOperators: [],
        bitLength: 2,
        clearMatchingType: "int8"
    },
    {
        type: "Int4",
        value: 18,
        supportedOperators: [],
        bitLength: 4,
        clearMatchingType: "int8"
    },
    {
        type: "Int6",
        value: 19,
        supportedOperators: [],
        bitLength: 6,
        clearMatchingType: "int8"
    },
    {
        type: "Int8",
        value: 20,
        supportedOperators: [],
        bitLength: 8,
        clearMatchingType: "int8"
    },
    {
        type: "Int10",
        value: 21,
        supportedOperators: [],
        bitLength: 10,
        clearMatchingType: "int16"
    },
    {
        type: "Int12",
        value: 22,
        supportedOperators: [],
        bitLength: 12,
        clearMatchingType: "int16"
    },
    {
        type: "Int14",
        value: 23,
        supportedOperators: [],
        bitLength: 14,
        clearMatchingType: "int16"
    },
    {
        type: "Int16",
        value: 24,
        supportedOperators: [],
        bitLength: 16,
        clearMatchingType: "int16"
    },
    {
        type: "Int32",
        value: 25,
        supportedOperators: [],
        bitLength: 32,
        clearMatchingType: "int32"
    },
    {
        type: "Int64",
        value: 26,
        supportedOperators: [],
        bitLength: 64,
        clearMatchingType: "int64"
    },
    {
        type: "Int128",
        value: 27,
        supportedOperators: [],
        bitLength: 128,
        clearMatchingType: "int128"
    },
    {
        type: "Int160",
        value: 28,
        supportedOperators: [],
        bitLength: 160,
        clearMatchingType: "int160"
    },
    {
        type: "Int256",
        value: 29,
        supportedOperators: [],
        bitLength: 256,
        clearMatchingType: "int256"
    },
    {
        type: "AsciiString",
        value: 30,
        supportedOperators: [],
        bitLength: 0,
        clearMatchingType: "string memory"
    },
    {
        type: "Int512",
        value: 31,
        supportedOperators: [],
        bitLength: 512,
        clearMatchingType: "bytes memory"
    },
    {
        type: "Int1024",
        value: 32,
        supportedOperators: [],
        bitLength: 1024,
        clearMatchingType: "bytes memory"
    },
    {
        type: "Int2048",
        value: 33,
        supportedOperators: [],
        bitLength: 2048,
        clearMatchingType: "bytes memory"
    },
    {
        type: "Uint24",
        value: 34,
        supportedOperators: [],
        bitLength: 24,
        clearMatchingType: "uint24",
        aliases: [
            {
                type: "Bytes3",
                supportedOperators: [],
                clearMatchingType: "bytes3"
            }
        ]
    },
    {
        type: "Uint40",
        value: 35,
        supportedOperators: [],
        bitLength: 40,
        clearMatchingType: "uint40",
        aliases: [
            {
                type: "Bytes5",
                supportedOperators: [],
                clearMatchingType: "bytes5"
            }
        ]
    },
    {
        type: "Uint48",
        value: 36,
        supportedOperators: [],
        bitLength: 48,
        clearMatchingType: "uint48",
        aliases: [
            {
                type: "Bytes6",
                supportedOperators: [],
                clearMatchingType: "bytes6"
            }
        ]
    },
    {
        type: "Uint56",
        value: 37,
        supportedOperators: [],
        bitLength: 56,
        clearMatchingType: "uint56",
        aliases: [
            {
                type: "Bytes7",
                supportedOperators: [],
                clearMatchingType: ""
            }
        ]
    },
    {
        type: "Uint72",
        value: 38,
        supportedOperators: [],
        bitLength: 72,
        clearMatchingType: "uint72",
        aliases: [
            {
                type: "Bytes9",
                supportedOperators: [],
                clearMatchingType: "bytes9"
            }
        ]
    },
    {
        type: "Uint80",
        value: 39,
        supportedOperators: [],
        bitLength: 80,
        clearMatchingType: "uint80",
        aliases: [
            {
                type: "Bytes10",
                supportedOperators: [],
                clearMatchingType: "bytes10"
            }
        ]
    },
    {
        type: "Uint88",
        value: 40,
        supportedOperators: [],
        bitLength: 88,
        clearMatchingType: "uint88",
        aliases: [
            {
                type: "Bytes11",
                supportedOperators: [],
                clearMatchingType: "bytes11"
            }
        ]
    },
    {
        type: "Uint96",
        value: 41,
        supportedOperators: [],
        bitLength: 96,
        clearMatchingType: "uint96",
        aliases: [
            {
                type: "Bytes12",
                supportedOperators: [],
                clearMatchingType: "bytes12"
            }
        ]
    },
    {
        type: "Uint104",
        value: 42,
        supportedOperators: [],
        bitLength: 104,
        clearMatchingType: "uint104",
        aliases: [
            {
                type: "Bytes13",
                supportedOperators: [],
                clearMatchingType: "bytes13"
            }
        ]
    },
    {
        type: "Uint112",
        value: 43,
        supportedOperators: [],
        bitLength: 112,
        clearMatchingType: "uint112",
        aliases: [
            {
                type: "Bytes14",
                supportedOperators: [],
                clearMatchingType: "bytes14"
            }
        ]
    },
    {
        type: "Uint120",
        value: 44,
        supportedOperators: [],
        bitLength: 120,
        clearMatchingType: "uint120",
        aliases: [
            {
                type: "Bytes15",
                supportedOperators: [],
                clearMatchingType: "bytes15"
            }
        ]
    },
    {
        type: "Uint136",
        value: 45,
        supportedOperators: [],
        bitLength: 136,
        clearMatchingType: "uint136",
        aliases: [
            {
                type: "Bytes17",
                supportedOperators: [],
                clearMatchingType: "bytes17"
            }
        ]
    },
    {
        type: "Uint144",
        value: 46,
        supportedOperators: [],
        bitLength: 144,
        clearMatchingType: "uint144",
        aliases: [
            {
                type: "Bytes18",
                supportedOperators: [],
                clearMatchingType: "bytes18"
            }
        ]
    },
    {
        type: "Uint152",
        value: 47,
        supportedOperators: [],
        bitLength: 152,
        clearMatchingType: "uint152",
        aliases: [
            {
                type: "Bytes19",
                supportedOperators: [],
                clearMatchingType: "bytes19"
            }
        ]
    },
    {
        type: "Uint168",
        value: 48,
        supportedOperators: [],
        bitLength: 168,
        clearMatchingType: "uint168",
        aliases: [
            {
                type: "Bytes21",
                supportedOperators: [],
                clearMatchingType: "bytes21"
            }
        ]
    },
    {
        type: "Uint176",
        value: 49,
        supportedOperators: [],
        bitLength: 176,
        clearMatchingType: "uint176",
        aliases: [
            {
                type: "Bytes22",
                supportedOperators: [],
                clearMatchingType: "bytes22"
            }
        ]
    },
    {
        type: "Uint184",
        value: 50,
        supportedOperators: [],
        bitLength: 184,
        clearMatchingType: "uint184",
        aliases: [
            {
                type: "Bytes23",
                supportedOperators: [],
                clearMatchingType: "bytes23"
            }
        ]
    },
    {
        type: "Uint192",
        value: 51,
        supportedOperators: [],
        bitLength: 192,
        clearMatchingType: "uint192",
        aliases: [
            {
                type: "Bytes24",
                supportedOperators: [],
                clearMatchingType: "24"
            }
        ]
    },
    {
        type: "Uint200",
        value: 52,
        supportedOperators: [],
        bitLength: 200,
        clearMatchingType: "uint200",
        aliases: [
            {
                type: "Bytes25",
                supportedOperators: [],
                clearMatchingType: "25"
            }
        ]
    },
    {
        type: "Uint208",
        value: 53,
        supportedOperators: [],
        bitLength: 208,
        clearMatchingType: "uint208",
        aliases: [
            {
                type: "Bytes26",
                supportedOperators: [],
                clearMatchingType: "26"
            }
        ]
    },
    {
        type: "Uint216",
        value: 54,
        supportedOperators: [],
        bitLength: 216,
        clearMatchingType: "uint216",
        aliases: [
            {
                type: "Bytes27",
                supportedOperators: [],
                clearMatchingType: "27"
            }
        ]
    },
    {
        type: "Uint224",
        value: 55,
        supportedOperators: [],
        bitLength: 224,
        clearMatchingType: "uint224",
        aliases: [
            {
                type: "Bytes28",
                supportedOperators: [],
                clearMatchingType: "28"
            }
        ]
    },
    {
        type: "Uint232",
        value: 56,
        supportedOperators: [],
        bitLength: 232,
        clearMatchingType: "uint232",
        aliases: [
            {
                type: "Bytes29",
                supportedOperators: [],
                clearMatchingType: "bytes29"
            }
        ]
    },
    {
        type: "Uint240",
        value: 57,
        supportedOperators: [],
        bitLength: 240,
        clearMatchingType: "uint240",
        aliases: [
            {
                type: "Bytes30",
                supportedOperators: [],
                clearMatchingType: "bytes30"
            }
        ]
    },
    {
        type: "Uint248",
        value: 58,
        supportedOperators: [],
        bitLength: 248,
        clearMatchingType: "uint248",
        aliases: [
            {
                type: "Bytes31",
                supportedOperators: [],
                clearMatchingType: "bytes31"
            }
        ]
    },
    {
        type: "Int24",
        value: 59,
        supportedOperators: [],
        bitLength: 24,
        clearMatchingType: "int24"
    },
    {
        type: "Int40",
        value: 60,
        supportedOperators: [],
        bitLength: 40,
        clearMatchingType: "int40"
    },
    {
        type: "Int48",
        value: 61,
        supportedOperators: [],
        bitLength: 48,
        clearMatchingType: "int48"
    },
    {
        type: "Int56",
        value: 62,
        supportedOperators: [],
        bitLength: 56,
        clearMatchingType: "int56"
    },
    {
        type: "Int72",
        value: 63,
        supportedOperators: [],
        bitLength: 72,
        clearMatchingType: "int72"
    },
    {
        type: "Int80",
        value: 64,
        supportedOperators: [],
        bitLength: 80,
        clearMatchingType: "int80"
    },
    {
        type: "Int88",
        value: 65,
        supportedOperators: [],
        bitLength: 88,
        clearMatchingType: "int88"
    },
    {
        type: "Int96",
        value: 66,
        supportedOperators: [],
        bitLength: 96,
        clearMatchingType: "int96"
    },
    {
        type: "Int104",
        value: 67,
        supportedOperators: [],
        bitLength: 104,
        clearMatchingType: "int104"
    },
    {
        type: "Int112",
        value: 68,
        supportedOperators: [],
        bitLength: 112,
        clearMatchingType: "int112"
    },
    {
        type: "Int120",
        value: 69,
        supportedOperators: [],
        bitLength: 120,
        clearMatchingType: "int120"
    },
    {
        type: "Int136",
        value: 70,
        supportedOperators: [],
        bitLength: 136,
        clearMatchingType: "int136"
    },
    {
        type: "Int144",
        value: 71,
        supportedOperators: [],
        bitLength: 144,
        clearMatchingType: "int144"
    },
    {
        type: "Int152",
        value: 72,
        supportedOperators: [],
        bitLength: 152,
        clearMatchingType: "int152"
    },
    {
        type: "Int168",
        value: 73,
        supportedOperators: [],
        bitLength: 168,
        clearMatchingType: "int168"
    },
    {
        type: "Int176",
        value: 74,
        supportedOperators: [],
        bitLength: 176,
        clearMatchingType: "int176"
    },
    {
        type: "Int184",
        value: 75,
        supportedOperators: [],
        bitLength: 184,
        clearMatchingType: "int184"
    },
    {
        type: "Int192",
        value: 76,
        supportedOperators: [],
        bitLength: 192,
        clearMatchingType: "int192"
    },
    {
        type: "Int200",
        value: 77,
        supportedOperators: [],
        bitLength: 200,
        clearMatchingType: "int200"
    },
    {
        type: "Int208",
        value: 78,
        supportedOperators: [],
        bitLength: 208,
        clearMatchingType: "int208"
    },
    {
        type: "Int216",
        value: 79,
        supportedOperators: [],
        bitLength: 216,
        clearMatchingType: "int216"
    },
    {
        type: "Int224",
        value: 80,
        supportedOperators: [],
        bitLength: 224,
        clearMatchingType: "int224"
    },
    {
        type: "Int232",
        value: 81,
        supportedOperators: [],
        bitLength: 232,
        clearMatchingType: "int232"
    },
    {
        type: "Int240",
        value: 82,
        supportedOperators: [],
        bitLength: 240,
        clearMatchingType: "int240"
    },
    {
        type: "Int248",
        value: 83,
        supportedOperators: [],
        bitLength: 248,
        clearMatchingType: "int248"
    }
];
function checkFheType(fheType) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUInt"])(fheType)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid FheType ".concat(fheType));
    }
    const theFheType = fheType;
    if (theFheType >= ALL_FHE_TYPES.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid FheType ".concat(fheType));
    }
}
function getFheTypeByteLength(fheType) {
    const fheBitLen = getFheTypeBitLength(fheType);
    return Math.ceil(fheBitLen / 8);
}
function getFheTypeBitLength(fheType) {
    return getFheTypeInfo(fheType).bitLength;
}
function getFheTypeInfo(type) {
    return ALL_FHE_TYPES[type];
} //# sourceMappingURL=FheType.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FheTypeToFhevmType",
    ()=>FheTypeToFhevmType,
    "FhevmType",
    ()=>FhevmType,
    "FhevmTypeMap",
    ()=>FhevmTypeMap,
    "FhevmTypeNameMap",
    ()=>FhevmTypeNameMap,
    "FhevmTypeToFheType",
    ()=>FhevmTypeToFheType,
    "allFhevmTypeInfos",
    ()=>allFhevmTypeInfos,
    "allFhevmTypeNames",
    ()=>allFhevmTypeNames,
    "allFhevmTypes",
    ()=>allFhevmTypes,
    "checkFhevmType",
    ()=>checkFhevmType,
    "getFhevmTypeFheBitLength",
    ()=>getFhevmTypeFheBitLength,
    "getFhevmTypeInfo",
    ()=>getFhevmTypeInfo,
    "getFhevmTypeMaxClearTextBigInt",
    ()=>getFhevmTypeMaxClearTextBigInt,
    "isFhevmEaddress",
    ()=>isFhevmEaddress,
    "isFhevmEbool",
    ()=>isFhevmEbool,
    "isFhevmEbytes",
    ()=>isFhevmEbytes,
    "isFhevmEuint",
    ()=>isFhevmEuint,
    "isFhevmType",
    ()=>isFhevmType,
    "tryParseFhevmType",
    ()=>tryParseFhevmType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FheType.js [app-client] (ecmascript)");
;
;
;
var FhevmType;
(function(FhevmType) {
    FhevmType[FhevmType["ebool"] = 0] = "ebool";
    FhevmType[FhevmType["euint4"] = 1] = "euint4";
    FhevmType[FhevmType["euint8"] = 2] = "euint8";
    FhevmType[FhevmType["euint16"] = 3] = "euint16";
    FhevmType[FhevmType["euint32"] = 4] = "euint32";
    FhevmType[FhevmType["euint64"] = 5] = "euint64";
    FhevmType[FhevmType["euint128"] = 6] = "euint128";
    FhevmType[FhevmType["eaddress"] = 7] = "eaddress";
    FhevmType[FhevmType["euint256"] = 8] = "euint256";
    FhevmType[FhevmType["ebytes64"] = 9] = "ebytes64";
    FhevmType[FhevmType["ebytes128"] = 10] = "ebytes128";
    FhevmType[FhevmType["ebytes256"] = 11] = "ebytes256";
})(FhevmType || (FhevmType = {}));
const FhevmTypeMap = {
    ebool: FhevmType.ebool,
    euint4: FhevmType.euint4,
    euint8: FhevmType.euint8,
    euint16: FhevmType.euint16,
    euint32: FhevmType.euint32,
    euint64: FhevmType.euint64,
    euint128: FhevmType.euint128,
    eaddress: FhevmType.eaddress,
    euint256: FhevmType.euint256,
    ebytes64: FhevmType.ebytes64,
    ebytes128: FhevmType.ebytes128,
    ebytes256: FhevmType.ebytes256
};
Object.freeze(FhevmTypeMap);
const FhevmTypeNameMap = {
    [FhevmType.ebool]: "ebool",
    [FhevmType.euint4]: "euint4",
    [FhevmType.euint8]: "euint8",
    [FhevmType.euint16]: "euint16",
    [FhevmType.euint32]: "euint32",
    [FhevmType.euint64]: "euint64",
    [FhevmType.euint128]: "euint128",
    [FhevmType.euint256]: "euint256",
    [FhevmType.eaddress]: "eaddress",
    [FhevmType.ebytes64]: "ebytes64",
    [FhevmType.ebytes128]: "ebytes128",
    [FhevmType.ebytes256]: "ebytes256"
};
Object.freeze(FhevmTypeNameMap);
const allFhevmTypes = [
    FhevmType.ebool,
    FhevmType.euint4,
    FhevmType.euint8,
    FhevmType.euint16,
    FhevmType.euint32,
    FhevmType.euint64,
    FhevmType.euint128,
    FhevmType.eaddress,
    FhevmType.euint256,
    FhevmType.ebytes64,
    FhevmType.ebytes128,
    FhevmType.ebytes256
];
Object.freeze(allFhevmTypes);
const allFhevmTypeNames = [
    "ebool",
    "euint4",
    "euint8",
    "euint16",
    "euint32",
    "euint64",
    "euint128",
    "eaddress",
    "euint256",
    "ebytes64",
    "ebytes128",
    "ebytes256"
];
Object.freeze(allFhevmTypeNames);
const allFhevmTypeInfos = Object.freeze([
    Object.freeze({
        type: FhevmType.ebool,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Bool,
        name: "ebool",
        solidityTypeName: "bool",
        clearTextBitLength: 1
    }),
    Object.freeze({
        type: FhevmType.euint4,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint4,
        name: "euint4",
        solidityTypeName: "uint4",
        clearTextBitLength: 4
    }),
    Object.freeze({
        type: FhevmType.euint8,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint8,
        name: "euint8",
        solidityTypeName: "uint8",
        clearTextBitLength: 8
    }),
    Object.freeze({
        type: FhevmType.euint16,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint16,
        name: "euint16",
        solidityTypeName: "uint16",
        clearTextBitLength: 16
    }),
    Object.freeze({
        type: FhevmType.euint32,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint32,
        name: "euint32",
        solidityTypeName: "uint32",
        clearTextBitLength: 32
    }),
    Object.freeze({
        type: FhevmType.euint64,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint64,
        name: "euint64",
        solidityTypeName: "uint64",
        clearTextBitLength: 64
    }),
    Object.freeze({
        name: "euint128",
        type: FhevmType.euint128,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint128,
        solidityTypeName: "uint128",
        clearTextBitLength: 128
    }),
    Object.freeze({
        name: "eaddress",
        type: FhevmType.eaddress,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint160,
        solidityTypeName: "address",
        clearTextBitLength: 160
    }),
    Object.freeze({
        name: "euint256",
        type: FhevmType.euint256,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint256,
        solidityTypeName: "uint256",
        clearTextBitLength: 256
    }),
    Object.freeze({
        name: "ebytes64",
        type: FhevmType.ebytes64,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint512,
        solidityTypeName: "bytes",
        clearTextBitLength: 512
    }),
    Object.freeze({
        name: "ebytes128",
        type: FhevmType.ebytes128,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint1024,
        solidityTypeName: "bytes",
        clearTextBitLength: 1024
    }),
    Object.freeze({
        name: "ebytes256",
        type: FhevmType.ebytes256,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint2048,
        solidityTypeName: "bytes",
        clearTextBitLength: 2048
    })
]);
function isFhevmType(fhevmType) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUInt"])(fhevmType)) {
        return false;
    }
    const theFhevmType = fhevmType;
    if (theFhevmType >= allFhevmTypeInfos.length) {
        return false;
    }
    return true;
}
function isFhevmEbytes(fhevmType) {
    return fhevmType === FhevmType.ebytes64 || fhevmType === FhevmType.ebytes128 || fhevmType === FhevmType.ebytes256;
}
function isFhevmEuint(fhevmType) {
    return fhevmType === FhevmType.euint4 || fhevmType === FhevmType.euint8 || fhevmType === FhevmType.euint16 || fhevmType === FhevmType.euint32 || fhevmType === FhevmType.euint64 || fhevmType === FhevmType.euint128 || fhevmType === FhevmType.euint256;
}
function isFhevmEbool(fhevmType) {
    return fhevmType === FhevmType.ebool;
}
function isFhevmEaddress(fhevmType) {
    return fhevmType === FhevmType.eaddress;
}
function checkFhevmType(fhevmType) {
    if (!isFhevmType(fhevmType)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid FhevmType ".concat(fhevmType));
    }
}
function FheTypeToFhevmType(fheType) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkFheType"])(fheType);
    if (fheType >= allFhevmTypeInfos.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Cannot convert FheType ".concat(fheType, " to FhevmType"));
    }
    return fheType;
}
function FhevmTypeToFheType(fhevmType) {
    checkFhevmType(fhevmType);
    if (fhevmType >= __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_FHE_TYPES"].length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Cannot convert FhevmType: ".concat(fhevmType, " to FheType"));
    }
    return fhevmType;
}
function getFhevmTypeInfo(type) {
    if (typeof type === "string") {
        return allFhevmTypeInfos[FhevmTypeMap[type]];
    }
    return allFhevmTypeInfos[type];
}
function getFhevmTypeFheBitLength(fhevmType) {
    const fheType = FhevmTypeToFheType(fhevmType);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFheTypeBitLength"])(fheType);
}
function getFhevmTypeMaxClearTextBigInt(fhevmType) {
    const fhevmTypeInfo = getFhevmTypeInfo(fhevmType);
    const clearTextBitLen = fhevmTypeInfo.clearTextBitLength;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaxBigInt"])(clearTextBitLen);
}
function tryParseFhevmType(name) {
    if (typeof name !== "string") {
        return undefined;
    }
    if (!(name in FhevmTypeMap)) {
        return undefined;
    }
    try {
        return FhevmTypeMap[name];
    } catch (e) {
        return undefined;
    }
} //# sourceMappingURL=FhevmType.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmHandle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmHandle",
    ()=>FhevmHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FheType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmType.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FhevmHandle_hash21, _FhevmHandle_chainId, _FhevmHandle_fhevmType, _FhevmHandle_fheType, _FhevmHandle_version, _FhevmHandle_computed, _FhevmHandle_index;
;
;
;
;
;
;
;
;
class FhevmHandle {
    get hash21() {
        return __classPrivateFieldGet(this, _FhevmHandle_hash21, "f");
    }
    get chainId() {
        return __classPrivateFieldGet(this, _FhevmHandle_chainId, "f");
    }
    get fhevmType() {
        return __classPrivateFieldGet(this, _FhevmHandle_fhevmType, "f");
    }
    get fheType() {
        return __classPrivateFieldGet(this, _FhevmHandle_fheType, "f");
    }
    get version() {
        return __classPrivateFieldGet(this, _FhevmHandle_version, "f");
    }
    get computed() {
        return __classPrivateFieldGet(this, _FhevmHandle_computed, "f");
    }
    get index() {
        return __classPrivateFieldGet(this, _FhevmHandle_index, "f");
    }
    get fhevmTypeInfo() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFhevmTypeInfo"])(__classPrivateFieldGet(this, _FhevmHandle_fhevmType, "f"));
    }
    get fheTypeInfo() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFheTypeInfo"])(__classPrivateFieldGet(this, _FhevmHandle_fheType, "f"));
    }
    /**
     * Handles have the following format:
     * [21 first random bytes from hashing] | index_21 | chainID_22...29 | type_30 | version_31
     *
     * Handle format for user inputs and ops results are as such:
     * keccak256(keccak256(CiphertextFHEList)||index_handle)[0:20] || index_handle[21] || chainID [22:29] ||  handle_type [30] || handle_version [31]
     * If the handle stems from computation, the index_handle must be set to 0xff.
     * The CiphertextFHEList actually contains: 1 byte (= N) for size of handles_list, N bytes for the handles_types : 1 per handle, then the original fhe160list raw ciphertext
     */ static fromBytes32Hex(handleBytes32Hex) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof handleBytes32Hex === "string", "handle argument type mismatch. Got a ".concat(typeof handleBytes32Hex, ", expecting a string."));
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isHexString(handleBytes32Hex, 32)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid handle ".concat(handleBytes32Hex, ", handle length sould be 66"));
        }
        const hash21 = handleBytes32Hex.slice(0, 44);
        // Byte 21 = index
        const handleIndexHex = handleBytes32Hex.slice(44, 46);
        let handleIndex = 0;
        try {
            handleIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUIntNumber"])("0x" + handleIndexHex);
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid handle ".concat(handleBytes32Hex, ", Byte 21 does not contain a valid index"));
        }
        // If the handle stems from computation, the index_handle must be set to 0xff.
        const computed = handleIndex === 255;
        // Bytes 22-29 must be the chainId
        const handleChainIdHex = handleBytes32Hex.slice(46, 62);
        let chainId = 0;
        try {
            chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUIntNumber"])("0x" + handleChainIdHex);
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid handle ".concat(handleBytes32Hex, ", Byte 22-29 does not contain a valid chainId"));
        }
        // Byte30: type
        const handleTypeHex = handleBytes32Hex.slice(62, 64);
        let fheType = undefined;
        let fhevmType = undefined;
        try {
            const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUIntNumber"])("0x" + handleTypeHex);
            fheType = t;
            fhevmType = t;
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid handle ".concat(handleBytes32Hex, ", Byte 30 does not contain the a valid (got 0x").concat(handleTypeHex, ")."));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkFheType"])(fheType);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkFhevmType"])(fhevmType);
        // Byte31: handle version is 0 at this point
        const handleVersionHex = handleBytes32Hex.slice(64, 66);
        let version = 0;
        try {
            version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUIntNumber"])("0x" + handleVersionHex);
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid handle ".concat(handleBytes32Hex, ", Byte 31 does not contain a valid version number."));
        }
        if (version !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].FHEVM_HANDLE_VERSION) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid handle ".concat(handleBytes32Hex, ", Byte 31 does not contain the expected version=").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].FHEVM_HANDLE_VERSION, ", got ").concat(version, " instead"));
        }
        const fhevmHandle = new FhevmHandle(hash21, chainId, fhevmType, fheType, version, computed, handleIndex < 255 ? handleIndex : undefined);
        // For debug purpose
        // const _h = fhevmHandle.toHandleBytes32Hex();
        // if (_h !== handleBytes32Hex) {
        //   assertFhevmFailed(`${_h} === ${handleBytes32Hex}`);
        // }
        return fhevmHandle;
    }
    static verify(handleBytes32, expected) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32String"])(handleBytes32, "handleBytes32");
        if (handleBytes32 === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Handle is not initialized");
        }
        const fhevmHandle = FhevmHandle.fromBytes32Hex(handleBytes32);
        if ((expected === null || expected === void 0 ? void 0 : expected.chainId) !== undefined) {
            if (fhevmHandle.chainId !== expected.chainId) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Chain ID mismatch for handle ".concat(handleBytes32, ", expected ").concat(expected.chainId, ", but got ").concat(fhevmHandle.chainId, " instead."));
            }
        }
        if ((expected === null || expected === void 0 ? void 0 : expected.fhevmType) !== undefined) {
            if (fhevmHandle.fhevmType !== expected.fhevmType) {
                const fhevmTypeInfo = fhevmHandle.fhevmTypeInfo;
                const expectedFhevmTypeInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFhevmTypeInfo"])(expected.fhevmType);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Type mismatch for handle '".concat(handleBytes32, "': expected '").concat(expectedFhevmTypeInfo.name, "', but got '").concat(fhevmTypeInfo.name, "' instead."));
            }
        }
        if ((expected === null || expected === void 0 ? void 0 : expected.fheType) !== undefined) {
            if (fhevmHandle.fheType !== expected.fheType) {
                const fheTypeInfo = fhevmHandle.fheTypeInfo;
                const expectedFheTypeInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFheTypeInfo"])(expected.fheType);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Type mismatch for handle '".concat(handleBytes32, "': expected '").concat(expectedFheTypeInfo.type, "', but got '").concat(fheTypeInfo.type, "' instead."));
            }
        }
        return fhevmHandle;
    }
    toHandleBytes32() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(Number(__classPrivateFieldGet(this, _FhevmHandle_fheType, "f")) === Number(__classPrivateFieldGet(this, _FhevmHandle_fhevmType, "f")));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FhevmHandle_index, "f") === undefined && __classPrivateFieldGet(this, _FhevmHandle_computed, "f") || __classPrivateFieldGet(this, _FhevmHandle_index, "f") !== undefined && __classPrivateFieldGet(this, _FhevmHandle_index, "f") < 255 && !__classPrivateFieldGet(this, _FhevmHandle_computed, "f"));
        const chainId32Bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uintToBytes"])(__classPrivateFieldGet(this, _FhevmHandle_chainId, "f"), 32);
        const chainId8Bytes = chainId32Bytes.subarray(24, 32);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(chainId32Bytes.length === 32);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(chainId8Bytes.length === 8);
        //const encryptionIndex1Byte = [this.#index === undefined ? 255 : this.#index];
        const handleHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getBytes(__classPrivateFieldGet(this, _FhevmHandle_hash21, "f"));
        const handleBytes32AsBytes = new Uint8Array(32);
        handleBytes32AsBytes.set(handleHash, 0);
        handleBytes32AsBytes[21] = __classPrivateFieldGet(this, _FhevmHandle_index, "f") === undefined ? 255 : __classPrivateFieldGet(this, _FhevmHandle_index, "f");
        handleBytes32AsBytes.set(chainId8Bytes, 22);
        handleBytes32AsBytes[30] = __classPrivateFieldGet(this, _FhevmHandle_fheType, "f");
        handleBytes32AsBytes[31] = __classPrivateFieldGet(this, _FhevmHandle_version, "f");
        return handleBytes32AsBytes;
    }
    toHandleBytes32Hex() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify(this.toHandleBytes32());
    }
    static createInputHandle(blobHashBytes32, aclAddress, chainId, fhevmType, ciphertextVersion, index) {
        const hash21 = FhevmHandle._computeInputHash21(blobHashBytes32, aclAddress, chainId, index);
        return new FhevmHandle(hash21, chainId, fhevmType, fhevmType, ciphertextVersion, false, index);
    }
    /**
     * blobHashBytes32 = keccak256(ciphertextWithZKProof)
     */ static _computeInputHash21(blobHashBytes32, aclAddress, chainId, index) {
        /*
    
            handle_hash = blobHash 32 Bytes + index 1 Byte + aclAddress 20 Bytes + chainId 32 bytes
            =======================================================================================
    
            let mut handle_hash = Keccak256::new();
            handle_hash.update(blob_hash);
            handle_hash.update([ct_idx as u8]);
            handle_hash.update(
                Address::from_str(&aux_data.acl_contract_address)
                    .expect("valid acl_contract_address")
                    .into_array(),
            );
            handle_hash.update(chain_id_bytes);
            let mut handle = handle_hash.finalize().to_vec();
    
        */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32"])(blobHashBytes32, "blobHash");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(aclAddress, "aclAddress");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsNumber"])(index, "index");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsNumber"])(chainId, "chainId");
        const encryptionIndex1Byte = new Uint8Array([
            index
        ]);
        const aclContractAddress20Bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addressToBytes"])(aclAddress, "ACL address");
        const chainId32Bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uintToBytes"])(chainId, 32);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes1"])(encryptionIndex1Byte);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes20"])(aclContractAddress20Bytes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32"])(chainId32Bytes);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].keccak256((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(blobHashBytes32, encryptionIndex1Byte, aclContractAddress20Bytes, chainId32Bytes));
    }
    static computeHandlesHex(ciphertextWithZKProof, fhevmTypes, aclContractAddress, chainId, ciphertextVersion) {
        const handlesAsBytes = FhevmHandle.computeHandles(ciphertextWithZKProof, fhevmTypes, aclContractAddress, chainId, ciphertextVersion);
        return handlesAsBytes.map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify);
    }
    static computeHandles(ciphertextWithZKProof, fhevmTypes, aclContractAddress, chainId, ciphertextVersion) {
        if (BigInt(chainId) > __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_UINT64"]) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("ChainId exceeds maximum allowed value (8 bytes)"); // fhevm assumes chainID is only taking up to 8 bytes
        }
        // Should be identical to:
        // https://github.com/zama-ai/fhevm-backend/blob/bae00d1b0feafb63286e94acdc58dc88d9c481bf/fhevm-engine/zkproof-worker/src/verifier.rs#L301
        const blobHashBytes32Hex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].keccak256(ciphertextWithZKProof);
        const blobHashBytes32 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getBytes(blobHashBytes32Hex);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(blobHashBytes32.length === 32);
        /*
    
        const ENCRYPTION_TYPES = {
          1: 0, // ebool takes 2 encrypted bits
          8: 2,
          16: 3,
          32: 4,
          64: 5,
          128: 6,
          160: 7,
          256: 8,
          512: 9,
          1024: 10,
          2048: 11,
        };
    
        */ const handles = fhevmTypes.map((fhevmType, encryptionIndex)=>{
            const fhevmHandle = FhevmHandle.createInputHandle(blobHashBytes32, aclContractAddress, chainId, fhevmType, ciphertextVersion, encryptionIndex);
            return fhevmHandle.toHandleBytes32();
        });
        return handles;
    }
    constructor(hash21, chainId, fhevmType, fheType, version, computed, index){
        _FhevmHandle_hash21.set(this, void 0);
        _FhevmHandle_chainId.set(this, void 0);
        _FhevmHandle_fhevmType.set(this, void 0);
        _FhevmHandle_fheType.set(this, void 0);
        _FhevmHandle_version.set(this, void 0);
        _FhevmHandle_computed.set(this, void 0);
        _FhevmHandle_index.set(this, void 0);
        __classPrivateFieldSet(this, _FhevmHandle_hash21, hash21, "f");
        __classPrivateFieldSet(this, _FhevmHandle_chainId, chainId, "f");
        __classPrivateFieldSet(this, _FhevmHandle_fhevmType, fhevmType, "f");
        __classPrivateFieldSet(this, _FhevmHandle_fheType, fheType, "f");
        __classPrivateFieldSet(this, _FhevmHandle_version, version, "f");
        __classPrivateFieldSet(this, _FhevmHandle_computed, computed, "f");
        if (index !== undefined) {
            __classPrivateFieldSet(this, _FhevmHandle_index, index, "f");
        }
    }
}
_FhevmHandle_hash21 = new WeakMap(), _FhevmHandle_chainId = new WeakMap(), _FhevmHandle_fhevmType = new WeakMap(), _FhevmHandle_fheType = new WeakMap(), _FhevmHandle_version = new WeakMap(), _FhevmHandle_computed = new WeakMap(), _FhevmHandle_index = new WeakMap(); /*
private static computeMockCiphertextWithZKProof(
    clearTextValuesBigInt: bigint[],
    fheTypes: FheType[],
    rand32BufferList: Buffer[],
  ): Uint8Array {
    let encrypted = Buffer.alloc(0);

    const numHandles = clearTextValuesBigInt.length;

    assertHHFhevm(rand32BufferList.length === numHandles);
    assertHHFhevm(fheTypes.length === numHandles);

    // 1. Build the typed values hash
    for (let i = 0; i < numHandles; ++i) {
      //type + value as bigint + random(32)
      const clearTextValueBigInt = clearTextValuesBigInt[i];
      const fheByteLen = getFheTypeByteLength(fheTypes[i]);

      const fheTypeBuffer = Buffer.from([fheTypes[i]]);
      const clearTextValueBuffer = toBufferBE(clearTextValueBigInt, fheByteLen);
      const rand32Buffer = rand32BufferList[i];

      // concatenate 32 random bytes at the end of buffer to simulate encryption noise
      const encBuffer = Buffer.concat([fheTypeBuffer, clearTextValueBuffer, rand32Buffer]);

      encrypted = Buffer.concat([encrypted, encBuffer]);
    }

    return new Uint8Array(new Keccak(256).update(Buffer.from(new Uint8Array(encrypted))).digest());
  }

*/  /*
const closestPP = getClosestPP();
      const pp = publicParams[closestPP]!.publicParams;
      const buffContract = fromHexString(contractAddress);
      const buffUser = fromHexString(userAddress);
      const buffAcl = fromHexString(aclContractAddress);
      const buffChainId = fromHexString(chainId.toString(16).padStart(64, '0'));
      const auxData = new Uint8Array(
        buffContract.length + buffUser.length + buffAcl.length + 32, // buffChainId.length,
      );
      auxData.set(buffContract, 0);
      auxData.set(buffUser, 20);
      auxData.set(buffAcl, 40);
      auxData.set(buffChainId, auxData.length - buffChainId.length);
      const encrypted = builder.build_with_proof_packed(
        pp,
        auxData,
        ZkComputeLoad.Verify,
      );
      ciphertextWithZKProof = encrypted.safe_serialize(
        SERIALIZED_SIZE_LIMIT_CIPHERTEXT,
      );
      return ciphertextWithZKProof;
*/  /*

// Compute input handle
export function computeInputHandlesBytes32AsBytes(
  ciphertextWithZKProof: Uint8Array | string,
  encryptionTypes: FheType[],
  chainId: number,
  aclContractAddress: string,
  ciphertextVersion: number,
): Uint8Array[] {
  const ciphertextWithZKProofUint8Array: Uint8Array =
    typeof ciphertextWithZKProof === "string" ? EthersT.toBeArray(aclContractAddress) : ciphertextWithZKProof;

  const blobHash = new Keccak(256).update(Buffer.from(ciphertextWithZKProofUint8Array)).digest();
  const aclContractAddress20Bytes = Buffer.from(EthersT.toBeArray(aclContractAddress));

  const chainId32Bytes = Buffer.from(new Uint8Array(toBufferBE(BigInt(chainId), 32)));
  const chainId8Bytes = chainId32Bytes.subarray(24, 32);

  const handlesBytes32AsBytes: Uint8Array[] = encryptionTypes.map(
    (encryptionType: FheType, encryptionIndex: number) => {
      const encryptionIndex1Byte = Buffer.from([encryptionIndex]);

      const handleHashBuffer = Buffer.concat([
        blobHash,
        encryptionIndex1Byte,
        aclContractAddress20Bytes,
        chainId32Bytes,
      ]);
      const handleHash = new Keccak(256).update(handleHashBuffer).digest();

      const handleBytes32AsBytes = new Uint8Array(32);
      handleBytes32AsBytes.set(handleHash, 0);

      handleBytes32AsBytes[21] = encryptionIndex;
      chainId8Bytes.copy(handleBytes32AsBytes, 22);
      handleBytes32AsBytes[30] = encryptionType;
      handleBytes32AsBytes[31] = ciphertextVersion;

      return handleBytes32AsBytes;
    },
  );

  return handlesBytes32AsBytes;
}


*/  /*
  public static computeHandles(
    ciphertextWithZKProof: Uint8Array,
    fhevmTypes: FhevmType[],
    aclContractAddress: string,
    chainId: number,
    ciphertextVersion: number,
  ): Uint8Array[] {

// Compute input handle (used by provider, must be moved to base)
export function computeInputHandlesBytes32AsBytes(
  ciphertextWithZKProof: Uint8Array | string,
  encryptionTypes: FheType[],
  chainId: number,
  aclContractAddress: string,
  ciphertextVersion: number,
): Uint8Array[] {
  const ciphertextWithZKProofUint8Array: Uint8Array =
    typeof ciphertextWithZKProof === "string" ? EthersT.toBeArray(aclContractAddress) : ciphertextWithZKProof;

  const blobHash = new Keccak(256).update(Buffer.from(ciphertextWithZKProofUint8Array)).digest();
  const aclContractAddress20Bytes = Buffer.from(EthersT.toBeArray(aclContractAddress));

  const chainId32Bytes = Buffer.from(new Uint8Array(toBufferBE(BigInt(chainId), 32)));
  const chainId8Bytes = chainId32Bytes.subarray(24, 32);

  const handlesBytes32AsBytes: Uint8Array[] = encryptionTypes.map(
    (encryptionType: FheType, encryptionIndex: number) => {
      const encryptionIndex1Byte = Buffer.from([encryptionIndex]);

      const handleHashBuffer = Buffer.concat([
        blobHash,
        encryptionIndex1Byte,
        aclContractAddress20Bytes,
        chainId32Bytes,
      ]);
      const handleHash = new Keccak(256).update(handleHashBuffer).digest();

      const handleBytes32AsBytes = new Uint8Array(32);
      handleBytes32AsBytes.set(handleHash, 0);

      handleBytes32AsBytes[21] = encryptionIndex;
      chainId8Bytes.copy(handleBytes32AsBytes, 22);
      handleBytes32AsBytes[30] = encryptionType;
      handleBytes32AsBytes[31] = ciphertextVersion;

      return handleBytes32AsBytes;
    },
  );

  return handlesBytes32AsBytes;
}

*/  //# sourceMappingURL=FhevmHandle.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/KMSVerifier.itf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KMSVerifierInterfaceVersion",
    ()=>KMSVerifierInterfaceVersion,
    "KMSVerifierPartialInterface",
    ()=>KMSVerifierPartialInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
const KMSVerifierInterfaceVersion = "0.8.0-0";
const KMSVerifierPartialInterface = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Interface([
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address"
            }
        ],
        name: "AddressEmptyCode",
        type: "error"
    },
    {
        inputs: [],
        name: "DeserializingDecryptionProofFail",
        type: "error"
    },
    {
        inputs: [],
        name: "ECDSAInvalidSignature",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "length",
                type: "uint256"
            }
        ],
        name: "ECDSAInvalidSignatureLength",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            }
        ],
        name: "ECDSAInvalidSignatureS",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "ERC1967InvalidImplementation",
        type: "error"
    },
    {
        inputs: [],
        name: "ERC1967NonPayable",
        type: "error"
    },
    {
        inputs: [],
        name: "EmptyDecryptionProof",
        type: "error"
    },
    {
        inputs: [],
        name: "FailedCall",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidInitialization",
        type: "error"
    },
    {
        inputs: [],
        name: "KMSAlreadySigner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "invalidSigner",
                type: "address"
            }
        ],
        name: "KMSInvalidSigner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "numSignatures",
                type: "uint256"
            }
        ],
        name: "KMSSignatureThresholdNotReached",
        type: "error"
    },
    {
        inputs: [],
        name: "KMSSignerNull",
        type: "error"
    },
    {
        inputs: [],
        name: "KMSZeroSignature",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "NotHostOwner",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializing",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializingFromEmptyProxy",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "OwnableInvalidOwner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error"
    },
    {
        inputs: [],
        name: "SignersSetIsEmpty",
        type: "error"
    },
    {
        inputs: [],
        name: "ThresholdIsAboveNumberOfSigners",
        type: "error"
    },
    {
        inputs: [],
        name: "ThresholdIsNull",
        type: "error"
    },
    {
        inputs: [],
        name: "UUPSUnauthorizedCallContext",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "slot",
                type: "bytes32"
            }
        ],
        name: "UUPSUnsupportedProxiableUUID",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [],
        name: "EIP712DomainChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "version",
                type: "uint64"
            }
        ],
        name: "Initialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "newKmsSignersSet",
                type: "address[]"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newThreshold",
                type: "uint256"
            }
        ],
        name: "NewContextSet",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferStarted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "Upgraded",
        type: "event"
    },
    {
        inputs: [],
        name: "DECRYPTION_RESULT_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "EIP712_PUBLIC_DECRYPT_TYPE",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "UPGRADE_INTERFACE_VERSION",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "newSignersSet",
                type: "address[]"
            },
            {
                internalType: "uint256",
                name: "newThreshold",
                type: "uint256"
            }
        ],
        name: "defineNewContext",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "eip712Domain",
        outputs: [
            {
                internalType: "bytes1",
                name: "fields",
                type: "bytes1"
            },
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "version",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "verifyingContract",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32"
            },
            {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getKmsSigners",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getThreshold",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getVersion",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "verifyingContractSource",
                type: "address"
            },
            {
                internalType: "uint64",
                name: "chainIDSource",
                type: "uint64"
            },
            {
                internalType: "address[]",
                name: "initialSigners",
                type: "address[]"
            },
            {
                internalType: "uint256",
                name: "initialThreshold",
                type: "uint256"
            }
        ],
        name: "initializeFromEmptyProxy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "isSigner",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pendingOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "reinitializeV3",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "threshold",
                type: "uint256"
            }
        ],
        name: "setThreshold",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "handlesList",
                type: "bytes32[]"
            },
            {
                internalType: "bytes",
                name: "decryptedResult",
                type: "bytes"
            },
            {
                internalType: "bytes",
                name: "decryptionProof",
                type: "bytes"
            }
        ],
        name: "verifyDecryptionEIP712KMSSignatures",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
]); //# sourceMappingURL=KMSVerifier.itf.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/KMSVerifier.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KMSVerifier",
    ()=>KMSVerifier,
    "computeDecryptionCallbackSignaturesAndCalldata",
    ()=>computeDecryptionCallbackSignaturesAndCalldata,
    "computeDecryptionSignatures",
    ()=>computeDecryptionSignatures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmHandle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$KMSVerifier$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/KMSVerifier.itf.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _KMSVerifier_kmsVerifierContract, _KMSVerifier_kmsVerifierContractAddress, _KMSVerifier_signersAddresses, _KMSVerifier_threshold, _KMSVerifier_eip712Domain;
;
;
;
;
;
;
;
;
;
;
;
;
class KMSVerifier extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmCoprocessorContractWrapper"] {
    static async create(runner, kmsVerifierContractAddress, abi, properties) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(kmsVerifierContractAddress, "kmsVerifierContractAddress");
        if (properties !== undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Not yet implemented");
        }
        const kmsVerifier = new KMSVerifier();
        __classPrivateFieldSet(kmsVerifier, _KMSVerifier_kmsVerifierContractAddress, kmsVerifierContractAddress, "f");
        __classPrivateFieldSet(kmsVerifier, _KMSVerifier_kmsVerifierContract, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(kmsVerifierContractAddress, abi !== null && abi !== void 0 ? abi : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$KMSVerifier$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KMSVerifierPartialInterface"], runner), "f");
        await kmsVerifier._initialize();
        return kmsVerifier;
    }
    get readonlyContract() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f") !== undefined, "KMSVerifier wrapper is not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f");
    }
    get interface() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f") !== undefined, "KMSVerifier wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f").interface;
    }
    async _initialize() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f") !== undefined, "KMSVerifier wrapper is not initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_signersAddresses, "f") === undefined, "KMSVerifier wrapper already initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_threshold, "f") === undefined, "KMSVerifier wrapper already initialized");
        const signers = await __classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f").getKmsSigners();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddressArray"])(signers);
        __classPrivateFieldSet(this, _KMSVerifier_signersAddresses, signers, "f");
        const threshold = await __classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f").getThreshold();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBigUint8"])(threshold);
        __classPrivateFieldSet(this, _KMSVerifier_threshold, Number(threshold), "f");
        if (__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f") === undefined) {
            // ignore extensions
            const eip712Domain = await __classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f").eip712Domain();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain.length === 7);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(eip712Domain[0], "eip712Domain[0]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(eip712Domain[1], "eip712Domain[1]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(eip712Domain[2], "eip712Domain[2]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBigUint256"])(eip712Domain[3], "eip712Domain[3]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(eip712Domain[4], "eip712Domain[4]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32String"])(eip712Domain[5], "eip712Domain[5]");
            __classPrivateFieldSet(this, _KMSVerifier_eip712Domain, {
                fields: Number(BigInt(eip712Domain[0])),
                name: eip712Domain[1],
                version: eip712Domain[2],
                chainId: eip712Domain[3],
                verifyingContract: eip712Domain[4],
                salt: eip712Domain[5]
            }, "f");
        }
        // Add extra checks (in case EIP712 are chanbging)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f").fields === Number(0x0f));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f").salt === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f").name === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.domain.name);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f").version === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.domain.version);
    }
    get address() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContractAddress, "f") !== undefined, "KMSVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContractAddress, "f");
    }
    // The KMSVerifier is always using the gatewayChainId in its eip712 domain
    get gatewayChainId() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f") !== undefined, "KMSVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f").chainId;
    }
    // The KMSVerifier is always using the address of the "Decryption.sol" contract deployed
    // on the gateway chainId in its eip712 domain
    get gatewayDecryptionAddress() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f") !== undefined, "KMSVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f").verifyingContract;
    }
    get eip712Domain() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f") !== undefined, "KMSVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f");
    }
    getKmsSignersAddresses() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_signersAddresses, "f") !== undefined, "KMSVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_signersAddresses, "f");
    }
    async assertMatchKmsSigners(signers) {
        const addresses = this.getKmsSignersAddresses();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArray"])(signers, "signers");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(signers.length === addresses.length, "signers.length === addresses.length");
        for(let i = 0; i < addresses.length; ++i){
            const s = await signers[i].getAddress();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(addresses[i] === s, "addresses[".concat(i, "] === await signers[").concat(i, "].getAddress()"));
        }
    }
    getThreshold() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_threshold, "f") !== undefined, "KMSVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_threshold, "f");
    }
    createPublicDecryptVerificationEIP712(handlesBytes32List, decryptedResult, extraData) {
        const domain = this.eip712Domain;
        const eip712 = {
            domain: {
                chainId: domain.chainId,
                name: domain.name,
                version: domain.version,
                verifyingContract: domain.verifyingContract
            },
            types: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.types,
            message: {
                ctHandles: handlesBytes32List,
                decryptedResult: decryptedResult,
                extraData
            }
        };
        return eip712;
    }
    constructor(){
        super("KMSVerifier");
        _KMSVerifier_kmsVerifierContract.set(this, void 0);
        _KMSVerifier_kmsVerifierContractAddress.set(this, void 0);
        _KMSVerifier_signersAddresses.set(this, void 0);
        _KMSVerifier_threshold.set(this, void 0);
        _KMSVerifier_eip712Domain.set(this, void 0);
    }
}
_KMSVerifier_kmsVerifierContract = new WeakMap(), _KMSVerifier_kmsVerifierContractAddress = new WeakMap(), _KMSVerifier_signersAddresses = new WeakMap(), _KMSVerifier_threshold = new WeakMap(), _KMSVerifier_eip712Domain = new WeakMap();
async function computeDecryptionSignatures(handlesBytes32Hex, clearTextValues, extraData, abiCoder, kmsVerifier, kmsSigners) {
    const fhevmHandles = handlesBytes32Hex.map((handleBytes32Hex)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].fromBytes32Hex(handleBytes32Hex));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(handlesBytes32Hex.length === clearTextValues.length);
    const abiTypes = [];
    const abiValues = [];
    for(let i = 0; i < handlesBytes32Hex.length; ++i){
        let clearTextValue = clearTextValues[i];
        if (typeof clearTextValue === "boolean") {
            clearTextValue = clearTextValue ? "0x01" : "0x00";
        }
        const clearTextValueBigInt = BigInt(clearTextValue);
        const fhevmTypeInfo = fhevmHandles[i].fhevmTypeInfo;
        abiTypes.push(fhevmTypeInfo.solidityTypeName);
        switch(fhevmTypeInfo.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].eaddress:
                {
                    // string
                    abiValues.push("0x".concat(clearTextValueBigInt.toString(16).padStart(40, "0")));
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebool:
                {
                    // bigint (0 or 1)
                    abiValues.push(clearTextValueBigInt);
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint4:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint8:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint16:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint32:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint64:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint128:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint256:
                {
                    // bigint
                    abiValues.push(clearTextValueBigInt);
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebytes64:
                {
                    // string
                    abiValues.push("0x".concat(clearTextValueBigInt.toString(16).padStart(128, "0")));
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebytes128:
                {
                    // string
                    abiValues.push("0x".concat(clearTextValueBigInt.toString(16).padStart(256, "0")));
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebytes256:
                {
                    // string
                    abiValues.push("0x".concat(clearTextValueBigInt.toString(16).padStart(512, "0")));
                    break;
                }
            default:
                {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unsupported Fhevm primitive type id: ".concat(fhevmTypeInfo.type, ", name: ").concat(fhevmTypeInfo.name, ", solidity: ").concat(fhevmTypeInfo.solidityTypeName));
                }
        }
    }
    // 1. 31 is just a dummy uint256 requestID to get correct abi encoding for the remaining arguments
    //    (i.e everything except the requestID)
    // 2. Adding also a dummy empty array of bytes for correct abi-encoding when used with signatures
    const encodedData = abiCoder.encode([
        "uint256",
        ...abiTypes,
        "bytes[]"
    ], [
        31,
        ...abiValues,
        []
    ]);
    // 1. We pop the dummy requestID to get the correct value to pass for `decryptedCts`
    // 2. We also pop the last 32 bytes (empty bytes[])
    const decryptedResult = "0x" + encodedData.slice(66).slice(0, -64);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(decryptedResult === "0x" + encodedData.slice(66, -64), "decryptedResult === '0x' + encodedData.slice(66, -64)");
    const eip712 = kmsVerifier.createPublicDecryptVerificationEIP712(handlesBytes32Hex, decryptedResult, extraData);
    const decryptResultsEIP712signatures = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multiSignEIP712"])(kmsSigners, eip712.domain, eip712.types, eip712.message);
    return {
        signatures: decryptResultsEIP712signatures,
        types: abiTypes,
        values: abiValues,
        decryptedResult
    };
}
async function computeDecryptionCallbackSignaturesAndCalldata(handlesBytes32Hex, clearTextValuesString, extraData, requestID, callbackSelectorBytes4Hex, abiCoder, kmsVerifier, kmsSigners) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(extraData === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].solidityPacked([
        "uint8"
    ], [
        0
    ]), "extraData must be 0x00");
    const { signatures, types, values } = await computeDecryptionSignatures(handlesBytes32Hex, clearTextValuesString, extraData, abiCoder, kmsVerifier, kmsSigners);
    // Build the decryptionProof as numSigners + KMS signatures + extraData
    const packedNumSigners = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].solidityPacked([
        "uint8"
    ], [
        signatures.length
    ]);
    const packedSignatures = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].solidityPacked(Array(signatures.length).fill("bytes"), signatures);
    const decryptionProof = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].concat([
        packedNumSigners,
        packedSignatures,
        extraData
    ]);
    // ABI encode the list of values in order to pass them in the callback
    const encodedCleartexts = abiCoder.encode([
        ...types
    ], [
        ...values
    ]);
    const calldata = callbackSelectorBytes4Hex + abiCoder.encode([
        "uint256",
        "bytes",
        "bytes"
    ], [
        requestID,
        encodedCleartexts,
        decryptionProof
    ]).slice(2);
    return {
        calldata
    };
} //# sourceMappingURL=KMSVerifier.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/ZamaFheDecryptionOracle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZamaFheDecryptionOracle",
    ()=>ZamaFheDecryptionOracle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$KMSVerifier$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/KMSVerifier.itf.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContract, _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContractAddress;
;
;
;
;
;
class ZamaFheDecryptionOracle extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmDecryptionOracleContractWrapper"] {
    static async create(runner, zamaFheDecryptionOracleContractAddress, abi) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(zamaFheDecryptionOracleContractAddress, "zamaFheDecryptionOracleContractAddress");
        const decryptionOracle = new ZamaFheDecryptionOracle();
        __classPrivateFieldSet(decryptionOracle, _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContractAddress, zamaFheDecryptionOracleContractAddress, "f");
        __classPrivateFieldSet(decryptionOracle, _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContract, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(zamaFheDecryptionOracleContractAddress, abi !== null && abi !== void 0 ? abi : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$KMSVerifier$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KMSVerifierPartialInterface"], runner), "f");
        await decryptionOracle._initialize();
        return decryptionOracle;
    }
    get readonlyContract() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContract, "f") !== undefined, "ZamaFheDecryptionOracle wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContract, "f");
    }
    get interface() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContract, "f") !== undefined, "ZamaFheDecryptionOracle wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContract, "f").interface;
    }
    async _initialize() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContract, "f") !== undefined, "ZamaFheDecryptionOracle wrapper is not initialized");
    }
    get address() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContractAddress, "f") !== undefined, "ZamaFheDecryptionOracle wrapper not initialized");
        return __classPrivateFieldGet(this, _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContractAddress, "f");
    }
    constructor(){
        super("DecryptionOracle");
        _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContract.set(this, void 0);
        _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContractAddress.set(this, void 0);
    }
}
_ZamaFheDecryptionOracle_zamaFheDecryptionOracleContract = new WeakMap(), _ZamaFheDecryptionOracle_zamaFheDecryptionOracleContractAddress = new WeakMap(); //# sourceMappingURL=ZamaFheDecryptionOracle.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractsRepository.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmContractsRepository",
    ()=>FhevmContractsRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$ACL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/ACL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FHEVMExecutor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FHEVMExecutor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$HCULimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/HCULimit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/InputVerifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/KMSVerifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$ZamaFheDecryptionOracle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/ZamaFheDecryptionOracle.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FhevmContractsRepository_acl, _FhevmContractsRepository_fhevmExecutor, _FhevmContractsRepository_inputVerifier, _FhevmContractsRepository_kmsVerifier, _FhevmContractsRepository_hcuLimit, _FhevmContractsRepository_zamaFheDecryptionOracle, _FhevmContractsRepository_addressToContract;
;
;
;
;
;
;
;
;
;
class FhevmContractsRepository {
    static async create(ethersReadonlyProvider, config) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(config.aclContractAddress)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid ACL contract address ".concat(config.aclContractAddress));
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(config.kmsContractAddress)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid KMSVerifier contract address ".concat(config.kmsContractAddress));
        }
        if (config.zamaFheDecryptionOracleAddress !== undefined) {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(config.zamaFheDecryptionOracleAddress)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid DecryptionOracle contract address ".concat(config.zamaFheDecryptionOracleAddress));
            }
        }
        const repo = new FhevmContractsRepository();
        __classPrivateFieldSet(repo, _FhevmContractsRepository_acl, await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$ACL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACL"].create(ethersReadonlyProvider, config.aclContractAddress, config.aclAbi, config.aclProperties), "f");
        __classPrivateFieldSet(repo, _FhevmContractsRepository_fhevmExecutor, await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FHEVMExecutor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVMExecutor"].create(ethersReadonlyProvider, __classPrivateFieldGet(repo, _FhevmContractsRepository_acl, "f").fhevmExecutorAddress, config.fhevmExecutorAbi, config.fhevmExecutorProperties), "f");
        __classPrivateFieldSet(repo, _FhevmContractsRepository_inputVerifier, await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputVerifier"].create(ethersReadonlyProvider, __classPrivateFieldGet(repo, _FhevmContractsRepository_fhevmExecutor, "f").inputVerifierAddress, config.inputVerifierAbi), "f");
        __classPrivateFieldSet(repo, _FhevmContractsRepository_kmsVerifier, await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KMSVerifier"].create(ethersReadonlyProvider, config.kmsContractAddress, config.kmsVerifierAbi), "f");
        __classPrivateFieldSet(repo, _FhevmContractsRepository_hcuLimit, await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$HCULimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HCULimit"].create(ethersReadonlyProvider, __classPrivateFieldGet(repo, _FhevmContractsRepository_fhevmExecutor, "f").hcuLimitAddress, config.hcuLimitAbi), "f");
        if (config.zamaFheDecryptionOracleAddress !== undefined) {
            __classPrivateFieldSet(repo, _FhevmContractsRepository_zamaFheDecryptionOracle, await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$ZamaFheDecryptionOracle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZamaFheDecryptionOracle"].create(ethersReadonlyProvider, config.zamaFheDecryptionOracleAddress, config.zamaFheDecryptionOracleAbi), "f");
        }
        if (__classPrivateFieldGet(repo, _FhevmContractsRepository_inputVerifier, "f").gatewayChainId !== __classPrivateFieldGet(repo, _FhevmContractsRepository_kmsVerifier, "f").gatewayChainId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("gateway chainId mismatch. InputVerifier.gatewayChainId=".concat(__classPrivateFieldGet(repo, _FhevmContractsRepository_inputVerifier, "f").gatewayChainId, " differs from KMSVerifier.gatewayChainId=").concat(__classPrivateFieldGet(repo, _FhevmContractsRepository_kmsVerifier, "f").gatewayChainId));
        }
        __classPrivateFieldSet(repo, _FhevmContractsRepository_addressToContract, {}, "f");
        __classPrivateFieldGet(repo, _FhevmContractsRepository_addressToContract, "f")[__classPrivateFieldGet(repo, _FhevmContractsRepository_acl, "f").address.toLowerCase()] = __classPrivateFieldGet(repo, _FhevmContractsRepository_acl, "f");
        __classPrivateFieldGet(repo, _FhevmContractsRepository_addressToContract, "f")[__classPrivateFieldGet(repo, _FhevmContractsRepository_fhevmExecutor, "f").address.toLowerCase()] = __classPrivateFieldGet(repo, _FhevmContractsRepository_fhevmExecutor, "f");
        if (__classPrivateFieldGet(repo, _FhevmContractsRepository_zamaFheDecryptionOracle, "f")) {
            __classPrivateFieldGet(repo, _FhevmContractsRepository_addressToContract, "f")[__classPrivateFieldGet(repo, _FhevmContractsRepository_zamaFheDecryptionOracle, "f").address.toLowerCase()] = __classPrivateFieldGet(repo, _FhevmContractsRepository_zamaFheDecryptionOracle, "f");
        }
        __classPrivateFieldGet(repo, _FhevmContractsRepository_addressToContract, "f")[__classPrivateFieldGet(repo, _FhevmContractsRepository_inputVerifier, "f").address.toLowerCase()] = __classPrivateFieldGet(repo, _FhevmContractsRepository_inputVerifier, "f");
        __classPrivateFieldGet(repo, _FhevmContractsRepository_addressToContract, "f")[__classPrivateFieldGet(repo, _FhevmContractsRepository_kmsVerifier, "f").address.toLowerCase()] = __classPrivateFieldGet(repo, _FhevmContractsRepository_kmsVerifier, "f");
        __classPrivateFieldGet(repo, _FhevmContractsRepository_addressToContract, "f")[__classPrivateFieldGet(repo, _FhevmContractsRepository_hcuLimit, "f").address.toLowerCase()] = __classPrivateFieldGet(repo, _FhevmContractsRepository_hcuLimit, "f");
        Object.freeze(__classPrivateFieldGet(repo, _FhevmContractsRepository_addressToContract, "f"));
        return repo;
    }
    addressToContractMap() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FhevmContractsRepository_addressToContract, "f") !== undefined, "FhevmContractsRepository is not initialized");
        return __classPrivateFieldGet(this, _FhevmContractsRepository_addressToContract, "f");
    }
    getContractFromAddress(address) {
        const a = address.toLowerCase();
        if (a === this.acl.address.toLowerCase()) {
            return this.acl;
        }
        if (a === this.fhevmExecutor.address.toLowerCase()) {
            return this.fhevmExecutor;
        }
        if (a === this.inputVerifier.address.toLowerCase()) {
            return this.inputVerifier;
        }
        if (a === this.kmsVerifier.address.toLowerCase()) {
            return this.kmsVerifier;
        }
        if (a === this.hcuLimit.address.toLowerCase()) {
            return this.hcuLimit;
        }
        if (this.zamaFheDecryptionOracle) {
            if (a === this.zamaFheDecryptionOracle.address.toLowerCase()) {
                return this.zamaFheDecryptionOracle;
            }
        }
        return undefined;
    }
    getContractFromName(name) {
        switch(name){
            case "ACL":
                return this.acl;
            case "FHEVMExecutor":
                return this.fhevmExecutor;
            case "InputVerifier":
                return this.inputVerifier;
            case "KMSVerifier":
                return this.kmsVerifier;
            case "HCULimit":
                return this.hcuLimit;
            case "DecryptionOracle":
                return this.zamaFheDecryptionOracle;
            default:
                {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unsupported contract ".concat(name));
                }
        }
    }
    getCoprocessorContractFromName(name) {
        switch(name){
            case "ACL":
                return this.acl;
            case "FHEVMExecutor":
                return this.fhevmExecutor;
            case "InputVerifier":
                return this.inputVerifier;
            case "KMSVerifier":
                return this.kmsVerifier;
            case "HCULimit":
                return this.hcuLimit;
            default:
                {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unsupported coprocessor contract ".concat(name));
                }
        }
    }
    getDecryptionOracleContractFromName(name) {
        switch(name){
            case "DecryptionOracle":
                return this.zamaFheDecryptionOracle;
            default:
                {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unsupported decryption oracle contract ".concat(name));
                }
        }
    }
    getCoprocessorInterfaceFromName(name) {
        return this.getCoprocessorContractFromName(name).interface;
    }
    getDecryptionOracleInterfaceFromName(name) {
        const c = this.getDecryptionOracleContractFromName(name);
        if (c === undefined) {
            return undefined;
        }
        return c.interface;
    }
    get zamaFheDecryptionOracle() {
        return __classPrivateFieldGet(this, _FhevmContractsRepository_zamaFheDecryptionOracle, "f");
    }
    get acl() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FhevmContractsRepository_acl, "f") !== undefined, "FhevmContractsRepository is not initialized");
        return __classPrivateFieldGet(this, _FhevmContractsRepository_acl, "f");
    }
    get fhevmExecutor() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FhevmContractsRepository_fhevmExecutor, "f") !== undefined, "FhevmContractsRepository is not initialized");
        return __classPrivateFieldGet(this, _FhevmContractsRepository_fhevmExecutor, "f");
    }
    get inputVerifier() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FhevmContractsRepository_inputVerifier, "f") !== undefined, "FhevmContractsRepository is not initialized");
        return __classPrivateFieldGet(this, _FhevmContractsRepository_inputVerifier, "f");
    }
    get kmsVerifier() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FhevmContractsRepository_kmsVerifier, "f") !== undefined, "FhevmContractsRepository is not initialized");
        return __classPrivateFieldGet(this, _FhevmContractsRepository_kmsVerifier, "f");
    }
    get hcuLimit() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FhevmContractsRepository_hcuLimit, "f") !== undefined, "FhevmContractsRepository is not initialized");
        return __classPrivateFieldGet(this, _FhevmContractsRepository_hcuLimit, "f");
    }
    getFhevmInstanceConfig(params) {
        var __classPrivateFieldGet1, __classPrivateFieldGet2;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FhevmContractsRepository_acl, "f") !== undefined, "FhevmContractsRepository is not initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FhevmContractsRepository_fhevmExecutor, "f") !== undefined, "FhevmContractsRepository is not initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FhevmContractsRepository_kmsVerifier, "f") !== undefined, "FhevmContractsRepository is not initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FhevmContractsRepository_inputVerifier, "f") !== undefined, "FhevmContractsRepository is not initialized");
        const decryptionOracleAddress = (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _FhevmContractsRepository_zamaFheDecryptionOracle, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.address;
        return {
            aclContractAddress: __classPrivateFieldGet(this, _FhevmContractsRepository_acl, "f").address,
            fhevmExecutorContractAddress: (__classPrivateFieldGet2 = __classPrivateFieldGet(this, _FhevmContractsRepository_fhevmExecutor, "f")) === null || __classPrivateFieldGet2 === void 0 ? void 0 : __classPrivateFieldGet2.address,
            chainId: params.chainId,
            gatewayChainId: Number(__classPrivateFieldGet(this, _FhevmContractsRepository_kmsVerifier, "f").gatewayChainId),
            inputVerifierContractAddress: __classPrivateFieldGet(this, _FhevmContractsRepository_inputVerifier, "f").address,
            kmsContractAddress: __classPrivateFieldGet(this, _FhevmContractsRepository_kmsVerifier, "f").address,
            verifyingContractAddressDecryption: __classPrivateFieldGet(this, _FhevmContractsRepository_kmsVerifier, "f").gatewayDecryptionAddress,
            verifyingContractAddressInputVerification: __classPrivateFieldGet(this, _FhevmContractsRepository_inputVerifier, "f").gatewayInputVerificationAddress,
            relayerUrl: params.relayerUrl,
            ...decryptionOracleAddress && {
                decryptionOracleAddress
            }
        };
    }
    constructor(){
        _FhevmContractsRepository_acl.set(this, void 0);
        _FhevmContractsRepository_fhevmExecutor.set(this, void 0);
        _FhevmContractsRepository_inputVerifier.set(this, void 0);
        _FhevmContractsRepository_kmsVerifier.set(this, void 0);
        _FhevmContractsRepository_hcuLimit.set(this, void 0);
        _FhevmContractsRepository_zamaFheDecryptionOracle.set(this, void 0);
        _FhevmContractsRepository_addressToContract.set(this, void 0);
    }
}
_FhevmContractsRepository_acl = new WeakMap(), _FhevmContractsRepository_fhevmExecutor = new WeakMap(), _FhevmContractsRepository_inputVerifier = new WeakMap(), _FhevmContractsRepository_kmsVerifier = new WeakMap(), _FhevmContractsRepository_hcuLimit = new WeakMap(), _FhevmContractsRepository_zamaFheDecryptionOracle = new WeakMap(), _FhevmContractsRepository_addressToContract = new WeakMap(); //# sourceMappingURL=FhevmContractsRepository.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$ACL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/ACL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FHEVMExecutor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FHEVMExecutor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractsRepository$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractsRepository.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$HCULimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/HCULimit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/InputVerifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/KMSVerifier.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$ACL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACL"],
    "FHEVMExecutor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FHEVMExecutor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVMExecutor"],
    "FhevmContractWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmContractWrapper"],
    "FhevmContractsRepository",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractsRepository$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmContractsRepository"],
    "FhevmCoprocessorContractWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmCoprocessorContractWrapper"],
    "FhevmDecryptionOracleContractWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmDecryptionOracleContractWrapper"],
    "HCULimit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$HCULimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HCULimit"],
    "InputVerifier",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputVerifier"],
    "KMSVerifier",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KMSVerifier"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$ACL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/ACL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FHEVMExecutor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FHEVMExecutor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractsRepository$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractsRepository.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$HCULimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/HCULimit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/InputVerifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/KMSVerifier.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/event.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlockLogCursor",
    ()=>BlockLogCursor,
    "assertEventArgIsAddress",
    ()=>assertEventArgIsAddress,
    "assertEventArgIsBigUint256",
    ()=>assertEventArgIsBigUint256,
    "assertEventArgIsBigUint8",
    ()=>assertEventArgIsBigUint8,
    "assertEventArgIsBytes16String",
    ()=>assertEventArgIsBytes16String,
    "assertEventArgIsBytes1String",
    ()=>assertEventArgIsBytes1String,
    "assertEventArgIsBytes32String",
    ()=>assertEventArgIsBytes32String,
    "assertEventArgIsBytes4String",
    ()=>assertEventArgIsBytes4String,
    "assertEventArgIsBytes8String",
    ()=>assertEventArgIsBytes8String,
    "assertEventArgIsBytesString",
    ()=>assertEventArgIsBytesString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BlockLogCursor_blockNumber, _BlockLogCursor_blockLogIndex;
;
;
;
;
function assertEventArgIsBigUint8(value, eventName, argIndex) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBigUint8"])(value, "".concat(eventName, " event arg #").concat(argIndex));
}
function assertEventArgIsBigUint256(value, eventName, argIndex) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBigUint256"])(value, "".concat(eventName, " event arg #").concat(argIndex));
}
function assertEventArgIsBytes1String(value, eventName, argIndex) {
    _assertEventArgIsBytesString(value, eventName, argIndex, 1);
}
function assertEventArgIsBytes4String(value, eventName, argIndex) {
    _assertEventArgIsBytesString(value, eventName, argIndex, 4);
}
function assertEventArgIsBytes8String(value, eventName, argIndex) {
    _assertEventArgIsBytesString(value, eventName, argIndex, 8);
}
function assertEventArgIsBytes16String(value, eventName, argIndex) {
    _assertEventArgIsBytesString(value, eventName, argIndex, 16);
}
function assertEventArgIsBytes32String(value, eventName, argIndex) {
    _assertEventArgIsBytesString(value, eventName, argIndex, 32);
}
function assertEventArgIsBytesString(value, eventName, argIndex) {
    _assertEventArgIsBytesString(value, eventName, argIndex);
}
function _assertEventArgIsBytesString(value, eventName, argIndex, width) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytesString"])(value, width, "".concat(eventName, " event arg #").concat(argIndex));
}
function assertEventArgIsAddress(value, eventName, argIndex) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(value, "".concat(eventName, " event arg #").concat(argIndex));
}
class BlockLogCursor {
    static check(blockNumber, blockLogIndex) {
        if (blockNumber < 0 || blockLogIndex < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid event at blockNumber=".concat(blockNumber, ", logIndex=").concat(blockLogIndex, "."));
        }
    }
    get isEmpty() {
        const empty = __classPrivateFieldGet(this, _BlockLogCursor_blockNumber, "f") < 0;
        if (empty) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _BlockLogCursor_blockLogIndex, "f") < 0);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _BlockLogCursor_blockLogIndex, "f") >= 0);
        }
        return empty;
    }
    get nextBlockNumber() {
        if (__classPrivateFieldGet(this, _BlockLogCursor_blockNumber, "f") < 0) {
            return 0;
        }
        return __classPrivateFieldGet(this, _BlockLogCursor_blockNumber, "f") + 1;
    }
    get blockNumber() {
        return __classPrivateFieldGet(this, _BlockLogCursor_blockNumber, "f");
    }
    get blockLogIndex() {
        return __classPrivateFieldGet(this, _BlockLogCursor_blockLogIndex, "f");
    }
    /*
      Returns `true` if this > {blockNumber, blockLogIndex}
    */ gt(blockNumber, blockLogIndex) {
        BlockLogCursor.check(blockNumber, blockLogIndex);
        if (__classPrivateFieldGet(this, _BlockLogCursor_blockNumber, "f") === blockNumber) {
            return __classPrivateFieldGet(this, _BlockLogCursor_blockLogIndex, "f") > blockLogIndex;
        }
        return __classPrivateFieldGet(this, _BlockLogCursor_blockNumber, "f") > blockNumber;
    }
    /*
      Returns `true` if this == {blockNumber, blockLogIndex}
    */ eq(blockNumber, blockLogIndex) {
        BlockLogCursor.check(blockNumber, blockLogIndex);
        return __classPrivateFieldGet(this, _BlockLogCursor_blockNumber, "f") === blockNumber && __classPrivateFieldGet(this, _BlockLogCursor_blockLogIndex, "f") === blockLogIndex;
    }
    /*
      Returns `true` if this >= {blockNumber, blockLogIndex}
    */ ge(blockNumber, blockLogIndex) {
        return this.gt(blockNumber, blockLogIndex) || this.eq(blockNumber, blockLogIndex);
    }
    /*
      throws an error if this >= {blockNumber, blockLogIndex}
    */ updateForward(blockNumber, blockLogIndex) {
        BlockLogCursor.check(blockNumber, blockLogIndex);
        if (this.ge(blockNumber, blockLogIndex)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Parse event at blockNumber=".concat(blockNumber, ", logIndex=").concat(blockLogIndex, " in backward order. Current blockNumber=").concat(__classPrivateFieldGet(this, _BlockLogCursor_blockNumber, "f"), ", logIndex=").concat(__classPrivateFieldGet(this, _BlockLogCursor_blockLogIndex, "f")));
        }
        __classPrivateFieldSet(this, _BlockLogCursor_blockNumber, blockNumber, "f");
        __classPrivateFieldSet(this, _BlockLogCursor_blockLogIndex, blockLogIndex, "f");
    }
    /*
      throws an error if this == {blockNumber, blockLogIndex}
    */ updateForwardOrBackward(blockNumber, blockLogIndex) {
        BlockLogCursor.check(blockNumber, blockLogIndex);
        if (this.eq(blockNumber, blockLogIndex)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Expecting event at a different position (blockNumber=".concat(blockNumber, ", logIndex=").concat(blockLogIndex, ")."));
        }
        __classPrivateFieldSet(this, _BlockLogCursor_blockNumber, blockNumber, "f");
        __classPrivateFieldSet(this, _BlockLogCursor_blockLogIndex, blockLogIndex, "f");
    }
    update(blockNumber, blockLogIndex) {
        BlockLogCursor.check(blockNumber, blockLogIndex);
        __classPrivateFieldSet(this, _BlockLogCursor_blockNumber, blockNumber, "f");
        __classPrivateFieldSet(this, _BlockLogCursor_blockLogIndex, blockLogIndex, "f");
    }
    constructor(fromBlockNumber){
        _BlockLogCursor_blockNumber.set(this, -1);
        _BlockLogCursor_blockLogIndex.set(this, -1);
        // We want the next block number to be `fromBlockNumber`
        // This usually happens when running tests in Anvil. The node is running with
        // plenty of old handles. So we need to start parsing events at a specific block number.
        // All events prior to this block number should be ignored
        __classPrivateFieldSet(this, _BlockLogCursor_blockNumber, fromBlockNumber <= 0 ? -1 : fromBlockNumber - 1, "f");
    }
}
_BlockLogCursor_blockNumber = new WeakMap(), _BlockLogCursor_blockLogIndex = new WeakMap(); //# sourceMappingURL=event.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/db/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkInsertArgs",
    ()=>checkInsertArgs,
    "checkQueryArgs",
    ()=>checkQueryArgs,
    "fhevmDBEntryToString",
    ()=>fhevmDBEntryToString,
    "stringToFhevmDBEntry",
    ()=>stringToFhevmDBEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
;
;
;
;
function checkInsertArgs(handleBytes32Hex, clearText, metadata) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32String"])(handleBytes32Hex);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32String"])(metadata.transactionHash);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsUintNumber"])(metadata.blockNumber);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsUintNumber"])(metadata.index);
    if (typeof clearText !== "bigint" && typeof clearText !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid clearText argument, expecting bigint or string, got ".concat(typeof clearText, " instead"));
    }
    if (typeof clearText === "string") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsHexString"])(clearText, "clearText argument");
    }
}
function checkQueryArgs(handleBytes32Hex) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32String"])(handleBytes32Hex);
}
function fhevmDBEntryToString(entry) {
    return "".concat(entry.metadata.blockNumber, ":").concat(entry.metadata.index, ":").concat(entry.metadata.transactionHash, ":").concat(entry.clearTextHex);
}
function stringToFhevmDBEntry(str) {
    const elements = str.split(":");
    return {
        clearTextHex: elements[3],
        metadata: {
            blockNumber: Number.parseInt(elements[0]),
            index: Number.parseInt(elements[1]),
            transactionHash: elements[2]
        }
    };
} //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/db/FhevmDBMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmDBMap",
    ()=>FhevmDBMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$db$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/db/utils.js [app-client] (ecmascript)");
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _FhevmDBMap_handleBytes32HexToClearText, _FhevmDBMap_counter, _FhevmDBMap_randomCounter, _FhevmDBMap_fromBlockNumber;
;
;
;
;
const __STRICT__ = false;
class FhevmDBMap {
    incRand() {
        var _a;
        __classPrivateFieldSet(this, _FhevmDBMap_randomCounter, (_a = __classPrivateFieldGet(this, _FhevmDBMap_randomCounter, "f"), _a++, _a), "f");
    }
    get randomCounter() {
        return __classPrivateFieldGet(this, _FhevmDBMap_randomCounter, "f");
    }
    get fromBlockNumber() {
        return __classPrivateFieldGet(this, _FhevmDBMap_fromBlockNumber, "f");
    }
    get countHandles() {
        if (!__classPrivateFieldGet(this, _FhevmDBMap_handleBytes32HexToClearText, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("FhevmDB not yet initialized");
        }
        return __classPrivateFieldGet(this, _FhevmDBMap_handleBytes32HexToClearText, "f").size;
    }
    _get() {
        if (!__classPrivateFieldGet(this, _FhevmDBMap_handleBytes32HexToClearText, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("FhevmDB not yet initialized");
        }
        return __classPrivateFieldGet(this, _FhevmDBMap_handleBytes32HexToClearText, "f");
    }
    async init(fromBlockNumber) {
        if (__classPrivateFieldGet(this, _FhevmDBMap_handleBytes32HexToClearText, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("FhevmDB already initialized");
        }
        __classPrivateFieldSet(this, _FhevmDBMap_fromBlockNumber, fromBlockNumber, "f");
        __classPrivateFieldSet(this, _FhevmDBMap_counter, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockLogCursor"](fromBlockNumber), "f");
        __classPrivateFieldSet(this, _FhevmDBMap_handleBytes32HexToClearText, new Map(), "f");
        return true;
    }
    /**
     * Reset can be usefull to test deterministic handles like trivialEncrypt.
     */ async reset() {
        this._get().clear();
    }
    async _insertHandleBytes32(handleBytes32Hex, clearTextBigIntOrHex, metadata, options) {
        if (!__classPrivateFieldGet(this, _FhevmDBMap_counter, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("FhevmDB not yet initialized");
        }
        const map = this._get();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (typeof clearTextBigIntOrHex !== "string") {
            clearTextBigIntOrHex = clearTextBigIntOrHex.toString();
        }
        const entryStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$db$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fhevmDBEntryToString"])({
            clearTextHex: clearTextBigIntOrHex,
            metadata
        });
        map.set(handleBytes32Hex, entryStr);
        if (metadata.transactionHash !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                __classPrivateFieldGet(this, _FhevmDBMap_counter, "f").update(metadata.blockNumber, metadata.index);
            }
        }
    //console.log("insert handleBytes32Hex=" + handleBytes32Hex);
    }
    async _queryHandleBytes32(handleBytes32Hex) {
        const map = this._get();
        const entryStr = map.get(handleBytes32Hex);
        if (entryStr === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Handle ".concat(handleBytes32Hex, " does not exist."));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$db$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringToFhevmDBEntry"])(entryStr);
    }
    async insertHandleBytes32(handleBytes32Hex, clearText, metadata, options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$db$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkInsertArgs"])(handleBytes32Hex, clearText, metadata);
        await this._insertHandleBytes32(handleBytes32Hex, clearText, metadata, options);
    }
    async queryHandleBytes32(handleBytes32Hex) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$db$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkQueryArgs"])(handleBytes32Hex);
        return await this._queryHandleBytes32(handleBytes32Hex);
    }
    async tryInsertHandleBytes32(handleBytes32Hex, clearText, metadata, options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$db$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkInsertArgs"])(handleBytes32Hex, clearText, metadata);
        try {
            await this._insertHandleBytes32(handleBytes32Hex, clearText, metadata, options);
            return true;
        } catch (e) {
            return false;
        }
    }
    async tryQueryHandleBytes32(handleBytes32Hex) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$db$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkQueryArgs"])(handleBytes32Hex);
        try {
            return await this._queryHandleBytes32(handleBytes32Hex);
        } catch (e) {
            return undefined;
        }
    }
    constructor(){
        _FhevmDBMap_handleBytes32HexToClearText.set(this, void 0);
        _FhevmDBMap_counter.set(this, void 0);
        _FhevmDBMap_randomCounter.set(this, 0);
        _FhevmDBMap_fromBlockNumber.set(this, -1);
    }
}
_FhevmDBMap_handleBytes32HexToClearText = new WeakMap(), _FhevmDBMap_counter = new WeakMap(), _FhevmDBMap_randomCounter = new WeakMap(), _FhevmDBMap_fromBlockNumber = new WeakMap(); //# sourceMappingURL=FhevmDBMap.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmHandleCoder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmHandleCoder",
    ()=>FhevmHandleCoder,
    "FhevmOperator",
    ()=>FhevmOperator,
    "createBinaryOpHandle",
    ()=>createBinaryOpHandle,
    "createBitwiseOpHandle",
    ()=>createBitwiseOpHandle,
    "createCompareOpHandle",
    ()=>createCompareOpHandle,
    "createNumericalOpHandle",
    ()=>createNumericalOpHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FheType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmHandle.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FhevmHandleCoder_aclAddress, _FhevmHandleCoder_chainId;
;
;
;
;
;
var FhevmOperator;
(function(FhevmOperator) {
    FhevmOperator[FhevmOperator["fheAdd"] = 0] = "fheAdd";
    FhevmOperator[FhevmOperator["fheSub"] = 1] = "fheSub";
    FhevmOperator[FhevmOperator["fheMul"] = 2] = "fheMul";
    FhevmOperator[FhevmOperator["fheDiv"] = 3] = "fheDiv";
    FhevmOperator[FhevmOperator["fheRem"] = 4] = "fheRem";
    FhevmOperator[FhevmOperator["fheBitAnd"] = 5] = "fheBitAnd";
    FhevmOperator[FhevmOperator["fheBitOr"] = 6] = "fheBitOr";
    FhevmOperator[FhevmOperator["fheBitXor"] = 7] = "fheBitXor";
    FhevmOperator[FhevmOperator["fheShl"] = 8] = "fheShl";
    FhevmOperator[FhevmOperator["fheShr"] = 9] = "fheShr";
    FhevmOperator[FhevmOperator["fheRotl"] = 10] = "fheRotl";
    FhevmOperator[FhevmOperator["fheRotr"] = 11] = "fheRotr";
    FhevmOperator[FhevmOperator["fheEq"] = 12] = "fheEq";
    FhevmOperator[FhevmOperator["fheNe"] = 13] = "fheNe";
    FhevmOperator[FhevmOperator["fheGe"] = 14] = "fheGe";
    FhevmOperator[FhevmOperator["fheGt"] = 15] = "fheGt";
    FhevmOperator[FhevmOperator["fheLe"] = 16] = "fheLe";
    FhevmOperator[FhevmOperator["fheLt"] = 17] = "fheLt";
    FhevmOperator[FhevmOperator["fheMin"] = 18] = "fheMin";
    FhevmOperator[FhevmOperator["fheMax"] = 19] = "fheMax";
    FhevmOperator[FhevmOperator["fheNeg"] = 20] = "fheNeg";
    FhevmOperator[FhevmOperator["fheNot"] = 21] = "fheNot";
    FhevmOperator[FhevmOperator["verifyCiphertext"] = 22] = "verifyCiphertext";
    FhevmOperator[FhevmOperator["cast"] = 23] = "cast";
    FhevmOperator[FhevmOperator["trivialEncrypt"] = 24] = "trivialEncrypt";
    FhevmOperator[FhevmOperator["fheIfThenElse"] = 25] = "fheIfThenElse";
    FhevmOperator[FhevmOperator["fheRand"] = 26] = "fheRand";
    FhevmOperator[FhevmOperator["fheRandBounded"] = 27] = "fheRandBounded";
})(FhevmOperator || (FhevmOperator = {}));
class FhevmHandleCoder {
    fheAdd(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createNumericalOpHandle(FhevmOperator.fheAdd, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheSub(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createNumericalOpHandle(FhevmOperator.fheSub, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheMul(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createNumericalOpHandle(FhevmOperator.fheMul, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheDiv(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createNumericalOpHandle(FhevmOperator.fheDiv, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheRem(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createNumericalOpHandle(FhevmOperator.fheRem, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheBitAnd(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createBitwiseOpHandle(FhevmOperator.fheBitAnd, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheBitOr(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createBitwiseOpHandle(FhevmOperator.fheBitOr, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheBitXor(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createBitwiseOpHandle(FhevmOperator.fheBitXor, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheShl(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createBitwiseOpHandle(FhevmOperator.fheShl, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheShr(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createBitwiseOpHandle(FhevmOperator.fheShr, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheRotl(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createBitwiseOpHandle(FhevmOperator.fheRotl, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheRotr(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createBitwiseOpHandle(FhevmOperator.fheRotr, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheEq(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createCompareOpHandle(FhevmOperator.fheEq, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheNe(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createCompareOpHandle(FhevmOperator.fheNe, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheGe(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createCompareOpHandle(FhevmOperator.fheGe, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheGt(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createCompareOpHandle(FhevmOperator.fheGt, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheLe(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createCompareOpHandle(FhevmOperator.fheLe, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    fheLt(lhsBytes32Hex, rhsBytes32Hex, scalar) {
        return createCompareOpHandle(FhevmOperator.fheLt, lhsBytes32Hex, rhsBytes32Hex, scalar, __classPrivateFieldGet(this, _FhevmHandleCoder_aclAddress, "f"), __classPrivateFieldGet(this, _FhevmHandleCoder_chainId, "f"));
    }
    constructor(aclAddress, chainId){
        _FhevmHandleCoder_aclAddress.set(this, void 0);
        _FhevmHandleCoder_chainId.set(this, void 0);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(aclAddress)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid ACL address");
        }
        if (typeof chainId !== "number") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid chainId");
        }
        __classPrivateFieldSet(this, _FhevmHandleCoder_aclAddress, aclAddress, "f");
        __classPrivateFieldSet(this, _FhevmHandleCoder_chainId, chainId, "f");
    }
}
_FhevmHandleCoder_aclAddress = new WeakMap(), _FhevmHandleCoder_chainId = new WeakMap();
/*
    function _appendMetadataToPrehandle(
        bytes32 prehandle,
        FheType handleType
    ) internal view virtual returns (bytes32 result) {
        /// @dev Clear bytes 21-31.
        result = prehandle & 0xffffffffffffffffffffffffffffffffffffffffff0000000000000000000000;
        /// @dev Set byte 21 to 0xff since the new handle comes from computation.
        result = result | (bytes32(uint256(0xff)) << 80);
        /// @dev chainId is cast to uint64 first to make sure it does not take more than 8 bytes before shifting.
        /// If EIP2294 gets approved, it will force the chainID's size to be lower than MAX_UINT64.
        result = result | (bytes32(uint256(uint64(block.chainid))) << 16);
        /// @dev Insert handleType into byte 30.
        result = result | (bytes32(uint256(uint8(handleType))) << 8);
        /// @dev Insert HANDLE_VERSION into byte 31.
        result = result | bytes32(uint256(HANDLE_VERSION));
    }

*/ function _appendMetadataToPrehandle(prehandle, handleType, chainId) {
    let result = prehandle & 0xffffffffffffffffffffffffffffffffffffffffff0000000000000000000000n;
    result = result | 0xffn << 80n;
    result = result | chainId << 16n;
    result = result | BigInt(handleType) << 8n;
    result = result | BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].FHEVM_HANDLE_VERSION);
    return result;
}
function createBinaryOpHandle(op, lhs, rhs, scalar, type, aclAddress, chainId) {
    if (typeof scalar === "boolean") {
        scalar = scalar ? "0x01" : "0x00";
    }
    const enc = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].solidityPacked([
        "uint8",
        "bytes32",
        "bytes32",
        "bytes1",
        "address",
        "uint256"
    ], [
        op,
        lhs,
        rhs,
        scalar,
        aclAddress,
        chainId
    ]);
    const prehandle = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].keccak256(enc));
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(_appendMetadataToPrehandle(prehandle, type, BigInt(chainId)));
}
function createNumericalOpHandle(op, lhs, rhs, scalar, aclAddress, chainId) {
    const handleLhs = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].fromBytes32Hex(lhs);
    return createBinaryOpHandle(op, lhs, rhs, scalar, handleLhs.fheType, aclAddress, chainId);
}
function createBitwiseOpHandle(op, lhs, rhs, scalar, aclAddress, chainId) {
    const handleLhs = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].fromBytes32Hex(lhs);
    return createBinaryOpHandle(op, lhs, rhs, scalar, handleLhs.fheType, aclAddress, chainId);
}
function createCompareOpHandle(op, lhs, rhs, scalar, aclAddress, chainId) {
    return createBinaryOpHandle(op, lhs, rhs, scalar, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Bool, aclAddress, chainId);
} //# sourceMappingURL=FhevmHandleCoder.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/coprocessor/CoprocessorEvents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isCoprocessorEventName",
    ()=>isCoprocessorEventName
]);
function isCoprocessorEventName(value) {
    return value === "VerifyCiphertext" || value === "TrivialEncrypt" || value === "TrivialEncryptBytes" || value === "FheAdd" || value === "FheSub" || value === "FheMul" || value === "FheDiv" || value === "FheRem" || value === "FheBitAnd" || value === "FheBitOr" || value === "FheBitXor" || value === "FheShl" || value === "FheShr" || value === "FheRotl" || value === "FheRotr" || value === "FheEq" || value === "FheEqBytes" || value === "FheNe" || value === "FheNeBytes" || value === "FheGe" || value === "FheGt" || value === "FheLe" || value === "FheLt" || value === "FheMin" || value === "FheMax" || value === "FheRand" || value === "FheRandBounded" || value === "FheNot" || value === "FheNeg" || value === "Cast" || value === "FheIfThenElse";
} //# sourceMappingURL=CoprocessorEvents.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/coprocessor/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCoprocessorEvents",
    ()=>getCoprocessorEvents,
    "parseCoprocessorEventsFromLogs",
    ()=>parseCoprocessorEventsFromLogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$FHEVMExecutor$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/FHEVMExecutor.itf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$CoprocessorEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/coprocessor/CoprocessorEvents.js [app-client] (ecmascript)");
;
;
;
;
;
async function getCoprocessorEvents(coprocessorContractInterface, coprocessorContractAddress, readonlyProvider, options) {
    let currentBlockNumber = -1;
    let toBlock;
    if (options.toBlockNumber !== undefined) {
        toBlock = options.toBlockNumber;
    } else {
        currentBlockNumber = await readonlyProvider.getBlockNumber();
        toBlock = currentBlockNumber;
    }
    let fromBlock;
    if (options.fromBlockNumber !== undefined) {
        fromBlock = options.fromBlockNumber;
    } else {
        fromBlock = toBlock;
    }
    if (fromBlock > toBlock) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid block filter fromBlock=".concat(fromBlock, " toBlock=").concat(toBlock));
    }
    // Fetch all events emitted by the contract
    const filter = {
        address: coprocessorContractAddress,
        fromBlock,
        toBlock
    };
    const logs = await readonlyProvider.getLogs(filter);
    const cursor = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockLogCursor"](-1);
    const events = logs.map((log)=>{
        try {
            cursor.updateForward(log.blockNumber, log.index);
            const parsedLog = coprocessorContractInterface.parseLog(log);
            if (log.blockNumber === fromBlock) {
                if (options.fromBlockLogIndex !== undefined) {
                    if (log.index < options.fromBlockLogIndex) {
                        return null;
                    }
                }
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$CoprocessorEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCoprocessorEventName"])(parsedLog.name)) {
                return null;
            }
            const evt = {
                eventName: parsedLog.name,
                args: parsedLog.args,
                index: log.index,
                blockNumber: log.blockNumber,
                transactionHash: log.transactionHash,
                transactionIndex: log.transactionIndex
            };
            return evt;
        } catch (e) {
            // If the log cannot be parsed, skip it
            return null;
        }
    }).filter((event)=>event !== null);
    return {
        events,
        cursor
    };
}
function parseCoprocessorEventsFromLogs(logs) {
    // flexible
    if (!logs) {
        return [];
    }
    const events = [];
    for (const log of logs){
        const event = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$FHEVMExecutor$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVMExecutorPartialInterface"].parseLog(log);
        if (!event) {
            continue;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$CoprocessorEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCoprocessorEventName"])(event.name)) {
            continue;
        }
        const ce = {
            eventName: event.name,
            args: event.args,
            blockNumber: log.blockNumber,
            index: log.index,
            transactionHash: log.transactionHash,
            transactionIndex: log.transactionIndex
        };
        events.push(ce);
    }
    return events;
} //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/anvil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anvilNodeInfo",
    ()=>anvilNodeInfo,
    "isAnvilProvider",
    ()=>isAnvilProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/provider.js [app-client] (ecmascript)");
;
;
;
async function anvilNodeInfo(provider) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(provider, "anvil_nodeInfo", []);
}
async function isAnvilProvider(provider) {
    try {
        const nodeInfo = await anvilNodeInfo(provider);
        if (!("environment" in nodeInfo)) {
            return {
                isAnvil: false,
                couldNotConnect: false
            };
        }
        const env = nodeInfo.environment;
        if (!("chainId" in env)) {
            return {
                isAnvil: false,
                couldNotConnect: false
            };
        }
        return {
            isAnvil: true,
            chainId: Number(BigInt(env.chainId)),
            couldNotConnect: false
        };
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatProviderError"])(e)) {
            // RPC method not supported / method not found
            if (e.code === -32004 || e.code === -32601) {
                return {
                    isAnvil: false,
                    couldNotConnect: false
                };
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatError"])(e)) {
            // HH only: cannot connect to specified network
            if (e.number === 108) {
                return {
                    couldNotConnect: true
                };
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeRuntime"])()) {
            if (e instanceof Error && "code" in e) {
                // Connection refused, this error can only be catched from a node runtime
                if (e.code === "ECONNREFUSED") {
                    return {
                        couldNotConnect: true
                    };
                }
            }
        }
        // Propagate the error
        throw e;
    }
} //# sourceMappingURL=anvil.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/hardhat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHardhatProvider",
    ()=>isHardhatProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/provider.js [app-client] (ecmascript)");
;
;
;
async function isHardhatProvider(provider) {
    try {
        const metadata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(provider, "hardhat_metadata", []);
        if (!("chainId" in metadata) || metadata.chainId !== 31337) {
            return {
                couldNotConnect: false,
                isHardhat: false
            };
        }
        if (!("instanceId" in metadata) || metadata.instanceId.length !== 66) {
            return {
                couldNotConnect: false,
                isHardhat: false
            };
        }
        return {
            couldNotConnect: false,
            isHardhat: true,
            chainId: Number(BigInt(metadata.chainId))
        };
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatProviderError"])(e)) {
            // RPC method not supported or not found
            if (e.code === -32004 || e.code === -32601) {
                return {
                    couldNotConnect: false,
                    isHardhat: false
                };
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatError"])(e)) {
            // HH only: cannot connect to specified network
            if (e.number === 108) {
                return {
                    couldNotConnect: true
                };
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeRuntime"])()) {
            if (e instanceof Error && "code" in e) {
                // Connection refused, this error can only be catched from a node runtime
                if (e.code === "ECONNREFUSED") {
                    return {
                        couldNotConnect: true
                    };
                }
            }
        }
        // Propagate the error
        throw e;
    }
} //# sourceMappingURL=hardhat.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/FhevmMockProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmMockProvider",
    ()=>FhevmMockProvider,
    "FhevmMockProviderType",
    ()=>FhevmMockProviderType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$anvil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/anvil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$hardhat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/hardhat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/provider.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FhevmMockProvider_minimalProvider, _FhevmMockProvider_readonlyEthersProvider, _FhevmMockProvider_info, _FhevmMockProvider_savedBlockGasLimit, _FhevmMockProvider_debugFunc;
;
;
;
;
;
;
;
var FhevmMockProviderType;
(function(FhevmMockProviderType) {
    FhevmMockProviderType[FhevmMockProviderType["Unknown"] = 0] = "Unknown";
    FhevmMockProviderType[FhevmMockProviderType["Hardhat"] = 1] = "Hardhat";
    FhevmMockProviderType[FhevmMockProviderType["HardhatNode"] = 2] = "HardhatNode";
    FhevmMockProviderType[FhevmMockProviderType["Anvil"] = 3] = "Anvil";
    FhevmMockProviderType[FhevmMockProviderType["SepoliaEthereum"] = 4] = "SepoliaEthereum";
})(FhevmMockProviderType || (FhevmMockProviderType = {}));
function fhevmMockProviderTypeToString(value) {
    switch(value){
        case FhevmMockProviderType.Unknown:
            return "Unknown";
        case FhevmMockProviderType.Hardhat:
            return "Hardhat";
        case FhevmMockProviderType.HardhatNode:
            return "Hardhat Node";
        case FhevmMockProviderType.Anvil:
            return "Anvil";
        case FhevmMockProviderType.SepoliaEthereum:
            return "SepoliaEthereum";
    }
}
class FhevmMockProvider {
    static async fromReadonlyProvider(readonlyProvider, networkName, defaultProviderType, defaultChainId, url) {
        return FhevmMockProvider.create(readonlyProvider, readonlyProvider, networkName, defaultProviderType, defaultChainId, url);
    }
    static async create(minimalProvider, readonlyEthersProvider, networkName, defaultProviderType, defaultChainId, url) {
        const info = await _resolveProviderInfo(minimalProvider, networkName, defaultProviderType, defaultChainId, url);
        const p = new FhevmMockProvider();
        __classPrivateFieldSet(p, _FhevmMockProvider_minimalProvider, minimalProvider, "f");
        __classPrivateFieldSet(p, _FhevmMockProvider_info, info, "f");
        if (readonlyEthersProvider === undefined && info.url !== undefined) {
            // no need to change the polling interval since
            // readonlyEthersProvider is read-only and does not listen to events
            readonlyEthersProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](info.url);
        }
        __classPrivateFieldSet(p, _FhevmMockProvider_readonlyEthersProvider, readonlyEthersProvider, "f");
        return p;
    }
    setDebugFunc(debugFunc) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof debugFunc === "function");
        __classPrivateFieldSet(this, _FhevmMockProvider_debugFunc, debugFunc, "f");
    }
    // public async getTransaction(txHash: string): Promise<null | EthersT.TransactionResponse> {
    //   return await this.ethersProvider.getTransaction(txHash);
    // }
    get readonlyEthersProvider() {
        // Make sure it is properly initialize. Use another property since #ethersProvider can be undefined
        if (!__classPrivateFieldGet(this, _FhevmMockProvider_minimalProvider, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("the FhevmMockProvider instance is not initialized.");
        }
        if (!__classPrivateFieldGet(this, _FhevmMockProvider_readonlyEthersProvider, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("the FhevmMockProvider instance is not able to provide a valid ethers.Provider instance.");
        }
        return __classPrivateFieldGet(this, _FhevmMockProvider_readonlyEthersProvider, "f");
    }
    get minimalProvider() {
        if (!__classPrivateFieldGet(this, _FhevmMockProvider_minimalProvider, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("the FhevmMockProvider instance is not initialized.");
        }
        return __classPrivateFieldGet(this, _FhevmMockProvider_minimalProvider, "f");
    }
    get info() {
        if (!__classPrivateFieldGet(this, _FhevmMockProvider_info, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("the FhevmMockProvider instance is not initialized.");
        }
        return __classPrivateFieldGet(this, _FhevmMockProvider_info, "f");
    }
    get isMock() {
        if (!__classPrivateFieldGet(this, _FhevmMockProvider_info, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("the FhevmMockProvider instance is not initialized.");
        }
        return __classPrivateFieldGet(this, _FhevmMockProvider_info, "f").type === FhevmMockProviderType.Hardhat || __classPrivateFieldGet(this, _FhevmMockProvider_info, "f").type === FhevmMockProviderType.HardhatNode || __classPrivateFieldGet(this, _FhevmMockProvider_info, "f").type === FhevmMockProviderType.Anvil;
    }
    get isSepoliaEthereum() {
        if (!__classPrivateFieldGet(this, _FhevmMockProvider_info, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("the FhevmMockProvider instance is not initialized.");
        }
        return __classPrivateFieldGet(this, _FhevmMockProvider_info, "f").type === FhevmMockProviderType.SepoliaEthereum;
    }
    get isHardhatWeb3Client() {
        if (!__classPrivateFieldGet(this, _FhevmMockProvider_info, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("the FhevmMockProvider instance is not initialized.");
        }
        return __classPrivateFieldGet(this, _FhevmMockProvider_info, "f").type === FhevmMockProviderType.Hardhat || __classPrivateFieldGet(this, _FhevmMockProvider_info, "f").type === FhevmMockProviderType.HardhatNode;
    }
    get chainId() {
        return this.info.chainId;
    }
    async impersonateAddressAndSetBalance(address, balance) {
        if (!this.info.methods.impersonateAccount) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Network ".concat(this.info.networkName, " does not support account impersonation"));
        }
        if (!this.info.methods.setBalance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Network ".concat(this.info.networkName, " does not support account setBalance"));
        }
        if (this.info.type === FhevmMockProviderType.Anvil) {
            if (!this.info.url) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unable to impersonate account. Missing Anvil url.");
            }
        }
        // for mocked mode
        // await provider.request({
        //   method: "hardhat_impersonateAccount",
        //   params: [address],
        // });
        await this.send(this.info.methods.impersonateAccount, [
            address
        ]);
        await this.send(this.info.methods.setBalance, [
            address,
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(balance)
        ]);
        if (this.info.type === FhevmMockProviderType.Anvil) {
            const jsonRpcProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(this.info.url);
            // In dev mode, speedup anvil tx processing by increasing polling frequency.
            // There is a difference between anvil and HH node. HH node process a tx instantly and tx.wait()
            // returns instantly. However anvil process the tx slighly later, therefore the first poll fails and
            // we have to wait for the next poll (4s later by default) to get the tx confirmation.
            jsonRpcProvider.pollingInterval = 100;
            return await jsonRpcProvider.getSigner(address);
        } else if (this.isHardhatWeb3Client) {
            // HH runtime is in charge to call getSigner with the impersonated `address` as argument
            // to retrieve the signer object.
            // Example: await hre.ethers.getSigner(impersonated_address);
            return undefined;
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Network ".concat(this.info.networkName, " does not support account impersonation"));
        }
    }
    async setCodeAt(address, byteCode) {
        const methodName = this.info.methods.setCode;
        if (!methodName) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Network ".concat(this.info.networkName, " does not support 'setCode' method."));
        }
        if (typeof byteCode !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid contract bytecode.");
        }
        await this.send(methodName, [
            address,
            byteCode
        ]);
    }
    send(method, params) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(this.minimalProvider, method, params !== null && params !== void 0 ? params : []);
    }
    async getCodeAt(address) {
        const byteCode = await this.send("eth_getCode", [
            address,
            "latest"
        ]);
        if (typeof byteCode !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unexpected 'eth_getCode' RPC response type.");
        }
        return byteCode;
    }
    async getBlockNumber() {
        const blockNumber = await this.send("eth_blockNumber");
        return Number(blockNumber);
    }
    async unsetTemporaryMinimumBlockGasLimit() {
        if (!__classPrivateFieldGet(this, _FhevmMockProvider_savedBlockGasLimit, "f")) {
            return;
        }
        try {
            await this.setBlockGasLimit(__classPrivateFieldGet(this, _FhevmMockProvider_savedBlockGasLimit, "f"));
        } finally{
            __classPrivateFieldSet(this, _FhevmMockProvider_savedBlockGasLimit, undefined, "f");
        }
    }
    async setTemporaryMinimumBlockGasLimit(minBlockGasLimit) {
        if (__classPrivateFieldGet(this, _FhevmMockProvider_savedBlockGasLimit, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("The minimum block gas limit has already been set.");
        }
        const currentBlockGasLimit = await this.getBlockGasLimit();
        if (!currentBlockGasLimit) {
            this._debug("Unable to setup minimum block gas limit.");
            return undefined;
        }
        if (minBlockGasLimit <= currentBlockGasLimit) {
            return undefined;
        }
        this._debug("Adjust block gas limit to: ".concat(minBlockGasLimit, ". Current block gas limit is too low: ").concat(currentBlockGasLimit));
        await this.setBlockGasLimit(minBlockGasLimit);
        __classPrivateFieldSet(this, _FhevmMockProvider_savedBlockGasLimit, currentBlockGasLimit, "f");
    }
    async setBlockGasLimit(blockGasLimit) {
        const blockGasLimitHex = "0x" + blockGasLimit.toString(16);
        await this.send("evm_setBlockGasLimit", [
            blockGasLimitHex
        ]);
        this._debug("Call evm_setBlockGasLimit ".concat(blockGasLimit));
    }
    async getBlockGasLimit() {
        const res = await this.send("eth_getBlockByNumber", [
            "latest",
            false
        ]);
        if (!res) {
            return undefined;
        }
        if (!("gasLimit" in res)) {
            return undefined;
        }
        try {
            return BigInt(res.gasLimit);
        } catch (e) {
            return undefined;
        }
    }
    _debug(message) {
        if (__classPrivateFieldGet(this, _FhevmMockProvider_debugFunc, "f")) {
            __classPrivateFieldGet(this, _FhevmMockProvider_debugFunc, "f").call(this, message);
        }
    }
    constructor(){
        _FhevmMockProvider_minimalProvider.set(this, void 0);
        _FhevmMockProvider_readonlyEthersProvider.set(this, void 0);
        _FhevmMockProvider_info.set(this, void 0);
        _FhevmMockProvider_savedBlockGasLimit.set(this, void 0);
        _FhevmMockProvider_debugFunc.set(this, void 0);
    }
}
_FhevmMockProvider_minimalProvider = new WeakMap(), _FhevmMockProvider_readonlyEthersProvider = new WeakMap(), _FhevmMockProvider_info = new WeakMap(), _FhevmMockProvider_savedBlockGasLimit = new WeakMap(), _FhevmMockProvider_debugFunc = new WeakMap();
async function _resolveProviderInfo(minimalProvider, networkName, defaultProviderType, defaultChainId, url) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(networkName, "networkName");
    if (networkName !== "hardhat" && networkName !== "localhost" && defaultChainId === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SEPOLIA_ETHEREUM_TESTNET_CHAINID) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(url !== undefined, "Missing sepolia url");
        return {
            type: FhevmMockProviderType.SepoliaEthereum,
            chainId: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SEPOLIA_ETHEREUM_TESTNET_CHAINID,
            methods: {},
            url,
            networkName,
            web3ClientVersion: ""
        };
    }
    const p = await _resolveProvider(minimalProvider, defaultProviderType, defaultChainId, url);
    switch(p.type){
        case FhevmMockProviderType.Unknown:
            {
                return {
                    type: p.type,
                    chainId: p.chainId,
                    methods: {},
                    url,
                    networkName,
                    web3ClientVersion: p.web3ClientVersion
                };
            }
        case FhevmMockProviderType.Hardhat:
        case FhevmMockProviderType.HardhatNode:
            {
                return {
                    type: p.type,
                    chainId: p.chainId,
                    methods: {
                        setBalance: "hardhat_setBalance",
                        setCode: "hardhat_setCode",
                        impersonateAccount: "hardhat_impersonateAccount"
                    },
                    url,
                    networkName,
                    web3ClientVersion: p.web3ClientVersion
                };
            }
        case FhevmMockProviderType.Anvil:
            {
                return {
                    type: p.type,
                    chainId: p.chainId,
                    methods: {
                        setBalance: "anvil_setBalance",
                        setCode: "anvil_setCode",
                        impersonateAccount: "anvil_impersonateAccount"
                    },
                    url,
                    networkName,
                    web3ClientVersion: p.web3ClientVersion
                };
            }
        default:
            {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unsuppored FhevmMockProviderType enum value '".concat(p.type, "'"));
            }
    }
}
async function _resolveProvider(minimalProvider, defaultProviderType, defaultChainId, url) {
    if (!url) {
        if (defaultProviderType !== FhevmMockProviderType.Hardhat) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Missing provider url");
        } else {
            if (defaultChainId !== 31337) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unexpected default chainId. Expecting '31337', got '".concat(defaultChainId, "' instead."));
            }
        }
    } else {
        if (!URL.canParse(url)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid provider url '".concat(url, "'"));
        }
    }
    const clientRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectedWeb3Client"])(minimalProvider);
    // Test Anvil first, because Anvil also supports hardhat RPC methods.
    const anvilRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$anvil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnvilProvider"])(minimalProvider);
    if (!anvilRes.couldNotConnect) {
        if (anvilRes.isAnvil) {
            if (defaultProviderType !== undefined && defaultProviderType !== FhevmMockProviderType.Anvil) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Provider type mismatch. Expecting ".concat(fhevmMockProviderTypeToString(defaultProviderType), ", got ").concat(fhevmMockProviderTypeToString(FhevmMockProviderType.Anvil), " instead"));
            }
            if (defaultChainId !== undefined && defaultChainId !== anvilRes.chainId) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Anvil chainId mismatch. Expecting chainId=".concat(defaultChainId, ", got ").concat(anvilRes.chainId, " instead"));
            }
            if (!clientRes.client) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unable to retrieve Anvil web3 client version.");
            }
            return {
                type: FhevmMockProviderType.Anvil,
                chainId: anvilRes.chainId,
                web3ClientVersion: clientRes.client
            };
        }
    // could connect, but was not identified as an Anvil provider
    }
    // Test Hardhat last, to avoid misdetecting the client.
    const hhRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$hardhat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatProvider"])(minimalProvider);
    if (!hhRes.couldNotConnect) {
        if (hhRes.isHardhat) {
            const providerType = url !== undefined ? FhevmMockProviderType.HardhatNode : FhevmMockProviderType.Hardhat;
            if (defaultProviderType !== undefined && defaultProviderType !== providerType) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Provider type mismatch. Expecting ".concat(fhevmMockProviderTypeToString(defaultProviderType), ", got ").concat(fhevmMockProviderTypeToString(providerType), " instead"));
            }
            if (defaultChainId !== undefined && defaultChainId !== hhRes.chainId) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Hardhat chainId mismatch. Expecting chainId=".concat(defaultChainId, ", got ").concat(hhRes.chainId, " instead"));
            }
            if (!clientRes.client) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unable to retrieve Hardhat web3 client version.");
            }
            return {
                type: providerType,
                chainId: hhRes.chainId,
                web3ClientVersion: clientRes.client
            };
        }
    // could connect, but was not identified as an Hardhat provider
    }
    // 3 possibilities:
    // 1- could not connect
    // 2- could connect, but was not identified as an Anvil provider
    // 3- could connect, but was not identified as an Hardhat provider
    if (!clientRes.couldNotConnect) {
        const chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectedChainId"])(minimalProvider);
        if (chainId === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unable to query provider chaindId");
        }
        if (defaultProviderType !== undefined && defaultProviderType !== FhevmMockProviderType.Unknown) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Provider type mismatch. Expecting ".concat(fhevmMockProviderTypeToString(defaultProviderType), ", got ").concat(fhevmMockProviderTypeToString(FhevmMockProviderType.Unknown), " instead"));
        }
        if (defaultChainId !== undefined && defaultChainId !== chainId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Provider chainId mismatch. Expecting chainId=".concat(defaultChainId, ", got ").concat(chainId, " instead"));
        }
        if (!clientRes.client) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unable to retrieve provider web3 client version.");
        }
        return {
            type: FhevmMockProviderType.Unknown,
            chainId,
            web3ClientVersion: clientRes.client
        };
    }
    if (defaultProviderType === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Resolve provider failed. Missing default provider type.");
    }
    if (defaultChainId === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Resolve provider failed. Missing default provider chainId.");
    }
    return {
        type: defaultProviderType,
        chainId: defaultChainId,
        web3ClientVersion: undefined
    };
} //# sourceMappingURL=FhevmMockProvider.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/coprocessor/CoprocessorEventsHandler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoprocessorEventsHandler",
    ()=>CoprocessorEventsHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmHandle.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CoprocessorEventsHandler_db, _CoprocessorEventsHandler_counterRand;
;
;
;
;
;
class CoprocessorEventsHandler {
    get counterRand() {
        return __classPrivateFieldGet(this, _CoprocessorEventsHandler_counterRand, "f");
    }
    async handleEvent(coprocessorEvent) {
        var _a;
        // Should be properly handled by the event iterator
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(coprocessorEvent.blockNumber >= __classPrivateFieldGet(this, _CoprocessorEventsHandler_db, "f").fromBlockNumber, "coprocessorEvent.blockNumber < this.#db.fromBlockNumber");
        // if (coprocessorEvent.blockNumber < this.#db.fromBlockNumber) {
        //   // ignore, the db exclusively contains handles generated from `firstBlockNumber` and above.
        //   console.log(
        //     `coprocessorEvent.blockNumber=${coprocessorEvent.blockNumber} < db.firstBlockNumber=${this.#db.fromBlockNumber}`,
        //   );
        //   return;
        // }
        if (coprocessorEvent.eventName === "VerifyCiphertext") {
            await this.verifyCipherText(coprocessorEvent.args);
        } else {
            const res = await this.executeCoprocessorEvent(coprocessorEvent);
            if (res) {
                await __classPrivateFieldGet(this, _CoprocessorEventsHandler_db, "f").insertHandleBytes32(res.resultBytes32, res.clearText, {
                    index: coprocessorEvent.index,
                    blockNumber: coprocessorEvent.blockNumber,
                    transactionHash: coprocessorEvent.transactionHash
                }, res.replace !== undefined ? {
                    replace: res.replace
                } : undefined);
                if (coprocessorEvent.eventName === "FheRandBounded" || coprocessorEvent.eventName === "FheRand") {
                    __classPrivateFieldSet(this, _CoprocessorEventsHandler_counterRand, (_a = __classPrivateFieldGet(this, _CoprocessorEventsHandler_counterRand, "f"), _a++, _a), "f");
                }
            }
        }
    }
    async executeCoprocessorEvent(event) {
        switch(event.eventName){
            case "TrivialEncrypt":
                {
                    // event TrivialEncrypt(address indexed caller, uint256 pt, FheType toType, bytes32 result);
                    const ptUint256 = event.args[1];
                    const fheType = event.args[2];
                    const resultBytes32 = event.args[3];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBigUint256"])(ptUint256, "TrivialEncrypt", 1);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBigUint256"])(fheType, "TrivialEncrypt", 2);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(resultBytes32, "TrivialEncrypt", 3);
                    return {
                        resultBytes32,
                        clearText: ptUint256
                    };
                }
            case "TrivialEncryptBytes":
                {
                    // event TrivialEncryptBytes(address indexed caller, bytes pt, FheType toType, bytes32 result);
                    const ptBytes = event.args[1];
                    const resultBytes32 = event.args[3];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytesString"])(ptBytes, "TrivialEncryptBytes", 1);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(resultBytes32, "TrivialEncrypt", 3);
                    return {
                        resultBytes32,
                        clearText: ptBytes
                    };
                }
            case "FheAdd":
                {
                    // event FheAdd(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result);
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    let clearText = binaryOp.clearTextLhsBigInt + binaryOp.clearTextRhsBigInt;
                    // Clamp
                    clearText = clearText % 2n ** binaryOp.clearTextBitLength;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheSub":
                {
                    // event FheSub(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result);
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    let clearText = binaryOp.clearTextLhsBigInt - binaryOp.clearTextRhsBigInt;
                    // Clamp
                    if (clearText < 0n) clearText = clearText + 2n ** binaryOp.clearTextBitLength;
                    clearText = clearText % 2n ** binaryOp.clearTextBitLength;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheMul":
                {
                    // event FheMul(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result);
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    let clearText = binaryOp.clearTextLhsBigInt * binaryOp.clearTextRhsBigInt;
                    // Clamp
                    clearText = clearText % 2n ** binaryOp.clearTextBitLength;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheDiv":
                {
                    // event FheDiv(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result);
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    if (!binaryOp.scalar) {
                        throw new Error("Non-scalar div not implemented yet");
                    }
                    // Check division by zero ?
                    const clearText = binaryOp.clearTextLhsBigInt / binaryOp.clearTextRhsBigInt;
                    // No Clamp needed
                    // clearText = clearText % 2n ** binaryOp.numBits;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheRem":
                {
                    //event FheRem(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result);
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    if (!binaryOp.scalar) {
                        throw new Error("Non-scalar rem not implemented yet");
                    }
                    // Check division by zero ?
                    const clearText = binaryOp.clearTextLhsBigInt % binaryOp.clearTextRhsBigInt;
                    // No Clamp needed
                    // clearText = clearText % 2n ** binaryOp.numBits;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheBitAnd":
                {
                    // event FheBitAnd(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result);
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    let clearText = binaryOp.clearTextLhsBigInt & binaryOp.clearTextRhsBigInt;
                    // Clamp
                    clearText = clearText % 2n ** binaryOp.clearTextBitLength;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheBitOr":
                {
                    // event FheBitOr(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result);
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    let clearText = binaryOp.clearTextLhsBigInt | binaryOp.clearTextRhsBigInt;
                    // Clamp
                    clearText = clearText % 2n ** binaryOp.clearTextBitLength;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheBitXor":
                {
                    // event FheBitXor(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result);
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    let clearText = binaryOp.clearTextLhsBigInt ^ binaryOp.clearTextRhsBigInt;
                    // Clamp
                    clearText = clearText % 2n ** binaryOp.clearTextBitLength;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheShl":
                {
                    // event FheShl(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result);
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    let clearText = binaryOp.clearTextLhsBigInt << binaryOp.clearTextRhsBigInt % binaryOp.clearTextBitLength;
                    // Clamp
                    clearText = clearText % 2n ** binaryOp.clearTextBitLength;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheShr":
                {
                    // event FheShr(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result);
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    let clearText = binaryOp.clearTextLhsBigInt >> binaryOp.clearTextRhsBigInt % binaryOp.clearTextBitLength;
                    // Clamp
                    clearText = clearText % 2n ** binaryOp.clearTextBitLength;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheRotl":
                {
                    // "event FheRotl(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result)",
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    const shift = binaryOp.clearTextRhsBigInt % binaryOp.clearTextBitLength;
                    let clearText = binaryOp.clearTextLhsBigInt << shift | binaryOp.clearTextLhsBigInt >> binaryOp.clearTextBitLength - shift;
                    // Clamp
                    clearText = clearText % 2n ** binaryOp.clearTextBitLength;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheRotr":
                {
                    // "event FheRotr(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result)",
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    const shift = binaryOp.clearTextRhsBigInt % binaryOp.clearTextBitLength;
                    let clearText = binaryOp.clearTextLhsBigInt >> shift | binaryOp.clearTextLhsBigInt << binaryOp.clearTextBitLength - shift;
                    // Clamp
                    clearText = clearText % 2n ** binaryOp.clearTextBitLength;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheEq":
                {
                    // "event FheEq(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result)",
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    const clearText = binaryOp.clearTextLhsBigInt === binaryOp.clearTextRhsBigInt ? 1n : 0n;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheEqBytes":
                {
                    // "event FheEqBytes(address indexed caller, bytes32 lhs, bytes rhs, bytes1 scalarByte, bytes32 result)",
                    const binaryOp = await this.parseBinaryBytesOpEvent(event);
                    const clearText = binaryOp.clearTextLhsBigInt === binaryOp.clearTextRhsBigInt ? 1n : 0n;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheNe":
                {
                    // "event FheNe(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result)",
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    const clearText = binaryOp.clearTextLhsBigInt === binaryOp.clearTextRhsBigInt ? 0n : 1n;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheNeBytes":
                {
                    // "event FheNeBytes(address indexed caller, bytes32 lhs, bytes rhs, bytes1 scalarByte, bytes32 result)",
                    const binaryOp = await this.parseBinaryBytesOpEvent(event);
                    const clearText = binaryOp.clearTextLhsBigInt !== binaryOp.clearTextRhsBigInt ? 1n : 0n;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheGe":
                {
                    // "event FheGe(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result)",
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    const clearText = binaryOp.clearTextLhsBigInt >= binaryOp.clearTextRhsBigInt ? 1n : 0n;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheGt":
                {
                    // "event FheGt(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result)",
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    const clearText = binaryOp.clearTextLhsBigInt > binaryOp.clearTextRhsBigInt ? 1n : 0n;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheLe":
                {
                    // "event FheLe(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result)",
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    const clearText = binaryOp.clearTextLhsBigInt <= binaryOp.clearTextRhsBigInt ? 1n : 0n;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheLt":
                {
                    // "event FheLt(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result)",
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    const clearText = binaryOp.clearTextLhsBigInt < binaryOp.clearTextRhsBigInt ? 1n : 0n;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheMin":
                {
                    // "event FheMin(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result)",
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    const clearText = binaryOp.clearTextLhsBigInt < binaryOp.clearTextRhsBigInt ? binaryOp.clearTextLhsBigInt : binaryOp.clearTextRhsBigInt;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheMax":
                {
                    // "event FheMax(address indexed caller, bytes32 lhs, bytes32 rhs, bytes1 scalarByte, bytes32 result)",
                    const binaryOp = await this.parseBinaryOpEvent(event);
                    const clearText = binaryOp.clearTextLhsBigInt > binaryOp.clearTextRhsBigInt ? binaryOp.clearTextLhsBigInt : binaryOp.clearTextRhsBigInt;
                    return {
                        resultBytes32: binaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheNot":
                {
                    // "event FheNot(address indexed caller, bytes32 ct, bytes32 result)",
                    const unaryOp = await this.parseUnaryOpEvent(event);
                    const clearText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bitwiseNotUIntBits"])(unaryOp.clearTextBigInt, unaryOp.clearTextBitLength);
                    return {
                        resultBytes32: unaryOp.resultBytes32,
                        clearText
                    };
                }
            case "FheNeg":
                {
                    // "event FheNeg(address indexed caller, bytes32 ct, bytes32 result)",
                    const unaryOp = await this.parseUnaryOpEvent(event);
                    let clearText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bitwiseNotUIntBits"])(unaryOp.clearTextBigInt, unaryOp.clearTextBitLength);
                    // Clamp
                    clearText = (clearText + 1n) % 2n ** unaryOp.clearTextBitLength;
                    return {
                        resultBytes32: unaryOp.resultBytes32,
                        clearText
                    };
                }
            case "Cast":
                {
                    // "event Cast(address indexed caller, bytes32 ct, uint8 toType, bytes32 result)",
                    const ctBytes32 = event.args[1];
                    const toTypeUint8 = event.args[2];
                    const resultBytes32 = event.args[3];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(ctBytes32, event.eventName, 1);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBigUint8"])(toTypeUint8, event.eventName, 2);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(resultBytes32, event.eventName, 3);
                    const resultFhevmHandle = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].fromBytes32Hex(resultBytes32);
                    const resultType = resultFhevmHandle.fheType;
                    const clearTextBitLength = BigInt(resultFhevmHandle.fhevmTypeInfo.clearTextBitLength);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(BigInt(resultType) === toTypeUint8, "Cast type mismatch, (resultType:".concat(resultType, ") !== (toTypeUint8:").concat(toTypeUint8, ")"));
                    const ct = BigInt((await __classPrivateFieldGet(this, _CoprocessorEventsHandler_db, "f").queryHandleBytes32(ctBytes32)).clearTextHex);
                    const clearText = ct % 2n ** clearTextBitLength;
                    return {
                        resultBytes32,
                        clearText
                    };
                }
            case "FheIfThenElse":
                {
                    // "event FheIfThenElse(address indexed caller, bytes32 control, bytes32 ifTrue, bytes32 ifFalse, bytes32 result)",
                    const controlBytes32 = event.args[1];
                    const ifTrueBytes32 = event.args[2];
                    const ifFalseBytes32 = event.args[3];
                    const resultBytes32 = event.args[4];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(controlBytes32, event.eventName, 1);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(ifTrueBytes32, event.eventName, 2);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(ifFalseBytes32, event.eventName, 3);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(resultBytes32, event.eventName, 4);
                    const control = BigInt((await __classPrivateFieldGet(this, _CoprocessorEventsHandler_db, "f").queryHandleBytes32(controlBytes32)).clearTextHex);
                    const ifTrue = BigInt((await __classPrivateFieldGet(this, _CoprocessorEventsHandler_db, "f").queryHandleBytes32(ifTrueBytes32)).clearTextHex);
                    const ifFalse = BigInt((await __classPrivateFieldGet(this, _CoprocessorEventsHandler_db, "f").queryHandleBytes32(ifFalseBytes32)).clearTextHex);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(control === 0n || control === 1n, "Unexpected FheIfThenElse control value. Got ".concat(control, ", expecting 0 or 1"));
                    const clearText = control === 1n ? ifTrue : ifFalse;
                    return {
                        resultBytes32,
                        clearText
                    };
                }
            case "FheRand":
                {
                    // "event FheRand(address indexed caller, uint8 randType, bytes16 seed, bytes32 result)",
                    const randTypeUint8 = event.args[1];
                    const seedBytes16 = event.args[2];
                    const resultBytes32 = event.args[3];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBigUint8"])(randTypeUint8, event.eventName, 1);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes16String"])(seedBytes16, event.eventName, 2);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(resultBytes32, event.eventName, 3);
                    const resultFhevmHandle = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].fromBytes32Hex(resultBytes32);
                    const resultType = resultFhevmHandle.fheType;
                    const clearTextBitLength = resultFhevmHandle.fhevmTypeInfo.clearTextBitLength;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(BigInt(resultType) === randTypeUint8, "Rand type mismatch, (resultType:".concat(resultType, ") !== (randTypeUint8:").concat(randTypeUint8, ")"));
                    //EthersT.randomBytes
                    const clearText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomBigInt"])(clearTextBitLength);
                    return {
                        resultBytes32,
                        clearText,
                        replace: true
                    };
                }
            case "FheRandBounded":
                {
                    // "event FheRandBounded(address indexed caller, uint256 upperBound, uint8 randType, bytes16 seed, bytes32 result)",
                    const upperBoundUint256 = event.args[1];
                    const randTypeUint8 = event.args[2];
                    const seedBytes16 = event.args[3];
                    const resultBytes32 = event.args[4];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBigUint256"])(upperBoundUint256, event.eventName, 1);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBigUint8"])(randTypeUint8, event.eventName, 2);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes16String"])(seedBytes16, event.eventName, 3);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(resultBytes32, event.eventName, 4);
                    const resultFhevmHandle = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].fromBytes32Hex(resultBytes32);
                    const resultType = resultFhevmHandle.fheType;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(BigInt(resultType) === randTypeUint8, "Rand type mismatch, (resultType:".concat(resultType, ") !== (randTypeUint8:").concat(randTypeUint8, ")"));
                    const clearText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomBigInt"])(Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["log2BigInt"])(upperBoundUint256)));
                    return {
                        resultBytes32,
                        clearText,
                        replace: true
                    };
                }
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unknown fhevm coprocessor event: ".concat(event.eventName));
    }
    async verifyCipherText(eventArgs) {
        /*
          event VerifyCiphertext(
              address indexed caller,
              bytes32 inputHandle,
              address userAddress,
              bytes inputProof,
              FheType inputType,
              bytes32 result
          );
        */ const inputHandleBytes32 = eventArgs[1];
        const userAddress = eventArgs[2];
        const inputProofBytes = eventArgs[3];
        const fheType = eventArgs[4];
        const resultBytes32 = eventArgs[5];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(inputHandleBytes32, "VerifyCipherText", 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsAddress"])(userAddress, "VerifyCipherText", 2);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytesString"])(inputProofBytes, "VerifyCipherText", 3);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBigUint256"])(fheType, "VerifyCipherText", 4);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(resultBytes32, "VerifyCipherText", 5);
        // At this point 'inputHandle' equals 'result'
        // See FHEVMExectuorNoEvents.sol + InputVerifier.sol
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(inputHandleBytes32 === resultBytes32, "VerifyCipherText: inputHandleBytes32=".concat(inputHandleBytes32, " differs from resultBytes32=").concat(resultBytes32));
        try {
            await __classPrivateFieldGet(this, _CoprocessorEventsHandler_db, "f").queryHandleBytes32(inputHandleBytes32);
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("User input was not found in DB inputHandle=".concat(inputHandleBytes32));
        }
    }
    async parseUnaryOpEvent(event) {
        const ctBytes32 = event.args[1];
        const resultBytes32 = event.args[2];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(ctBytes32, event.eventName, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(resultBytes32, event.eventName, 2);
        const resultFhevmHandle = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].fromBytes32Hex(resultBytes32);
        const clearTextBigInt = BigInt((await __classPrivateFieldGet(this, _CoprocessorEventsHandler_db, "f").queryHandleBytes32(ctBytes32)).clearTextHex);
        return {
            resultBytes32,
            clearTextBigInt,
            clearTextBitLength: BigInt(resultFhevmHandle.fhevmTypeInfo.clearTextBitLength)
        };
    }
    async parseBinaryOpEvent(event) {
        const lhsBytes32 = event.args[1];
        const rhsBytes32 = event.args[2];
        const scalarBytes1 = event.args[3];
        const resultBytes32 = event.args[4];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(lhsBytes32, event.eventName, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(rhsBytes32, event.eventName, 2);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes1String"])(scalarBytes1, event.eventName, 3);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(resultBytes32, event.eventName, 4);
        const resultFhevmHandle = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].fromBytes32Hex(resultBytes32);
        const scalar = scalarBytes1 === "0x01";
        const clearTextLhsBigInt = BigInt((await __classPrivateFieldGet(this, _CoprocessorEventsHandler_db, "f").queryHandleBytes32(lhsBytes32)).clearTextHex);
        const clearTextRhsBigInt = scalar ? BigInt(rhsBytes32) : BigInt((await __classPrivateFieldGet(this, _CoprocessorEventsHandler_db, "f").queryHandleBytes32(rhsBytes32)).clearTextHex);
        return {
            resultBytes32,
            clearTextLhsBigInt,
            clearTextRhsBigInt,
            scalar,
            clearTextBitLength: BigInt(resultFhevmHandle.fhevmTypeInfo.clearTextBitLength)
        };
    }
    async parseBinaryBytesOpEvent(event) {
        const lhsBytes32 = event.args[1];
        const rhsBytes = event.args[2];
        const scalarBytes1 = event.args[3];
        const resultBytes32 = event.args[4];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(lhsBytes32, event.eventName, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytesString"])(rhsBytes, event.eventName, 2);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes1String"])(scalarBytes1, event.eventName, 3);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(resultBytes32, event.eventName, 4);
        const resultFhevmHandle = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].fromBytes32Hex(resultBytes32);
        const scalar = scalarBytes1 === "0x01";
        const clearTextLhsBigInt = BigInt((await __classPrivateFieldGet(this, _CoprocessorEventsHandler_db, "f").queryHandleBytes32(lhsBytes32)).clearTextHex);
        const clearTextRhsBigInt = scalar ? BigInt(rhsBytes) : BigInt((await __classPrivateFieldGet(this, _CoprocessorEventsHandler_db, "f").queryHandleBytes32(rhsBytes)).clearTextHex);
        return {
            resultBytes32,
            clearTextLhsBigInt,
            clearTextRhsBigInt,
            scalar,
            clearTextBitLength: BigInt(resultFhevmHandle.fhevmTypeInfo.clearTextBitLength)
        };
    }
    constructor(db){
        _CoprocessorEventsHandler_db.set(this, void 0);
        _CoprocessorEventsHandler_counterRand.set(this, void 0);
        __classPrivateFieldSet(this, _CoprocessorEventsHandler_db, db, "f");
        __classPrivateFieldSet(this, _CoprocessorEventsHandler_counterRand, 0, "f");
    }
}
_CoprocessorEventsHandler_db = new WeakMap(), _CoprocessorEventsHandler_counterRand = new WeakMap(); //# sourceMappingURL=CoprocessorEventsHandler.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/coprocessor/CoprocessorEventsIterator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoprocessorEventsIterator",
    ()=>CoprocessorEventsIterator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/coprocessor/utils.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CoprocessorEventsIterator_cursor, _CoprocessorEventsIterator_coprocessorContractInterface, _CoprocessorEventsIterator_coprocessorContractAddress, _CoprocessorEventsIterator_readonlyProvider;
;
;
;
;
class CoprocessorEventsIterator {
    async next() {
        const currentBlockNumber = await __classPrivateFieldGet(this, _CoprocessorEventsIterator_readonlyProvider, "f").getBlockNumber();
        if (currentBlockNumber === __classPrivateFieldGet(this, _CoprocessorEventsIterator_cursor, "f").blockNumber) {
            return [];
        }
        const { events, cursor } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoprocessorEvents"])(__classPrivateFieldGet(this, _CoprocessorEventsIterator_coprocessorContractInterface, "f"), __classPrivateFieldGet(this, _CoprocessorEventsIterator_coprocessorContractAddress, "f"), __classPrivateFieldGet(this, _CoprocessorEventsIterator_readonlyProvider, "f"), {
            fromBlockNumber: __classPrivateFieldGet(this, _CoprocessorEventsIterator_cursor, "f").nextBlockNumber,
            toBlockNumber: currentBlockNumber
        });
        if (!cursor.isEmpty) {
            // events can be empty here!
            __classPrivateFieldGet(this, _CoprocessorEventsIterator_cursor, "f").updateForward(cursor.blockNumber, cursor.blockLogIndex);
        } else {
            // if the cursor has not progressed, then necessarily the events array
            // must empty.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(events.length === 0);
        }
        return events;
    }
    constructor(coprocessorContractInterface, coprocessorContractAddress, readonlyProvider, fromBlockNumber){
        _CoprocessorEventsIterator_cursor.set(this, void 0);
        _CoprocessorEventsIterator_coprocessorContractInterface.set(this, void 0);
        _CoprocessorEventsIterator_coprocessorContractAddress.set(this, void 0);
        _CoprocessorEventsIterator_readonlyProvider.set(this, void 0);
        __classPrivateFieldSet(this, _CoprocessorEventsIterator_coprocessorContractInterface, coprocessorContractInterface, "f");
        __classPrivateFieldSet(this, _CoprocessorEventsIterator_coprocessorContractAddress, coprocessorContractAddress, "f");
        __classPrivateFieldSet(this, _CoprocessorEventsIterator_readonlyProvider, readonlyProvider, "f");
        __classPrivateFieldSet(this, _CoprocessorEventsIterator_cursor, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockLogCursor"](fromBlockNumber), "f");
    }
}
_CoprocessorEventsIterator_cursor = new WeakMap(), _CoprocessorEventsIterator_coprocessorContractInterface = new WeakMap(), _CoprocessorEventsIterator_coprocessorContractAddress = new WeakMap(), _CoprocessorEventsIterator_readonlyProvider = new WeakMap(); //# sourceMappingURL=CoprocessorEventsIterator.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/coprocessor/MockCoprocessor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockCoprocessor",
    ()=>MockCoprocessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/InputVerifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$FHEVMExecutor$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/FHEVMExecutor.itf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$CoprocessorEventsHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/coprocessor/CoprocessorEventsHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$CoprocessorEventsIterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/coprocessor/CoprocessorEventsIterator.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MockCoprocessor_iterator, _MockCoprocessor_handler, _MockCoprocessor_db, _MockCoprocessor_coprocessorSigners, _MockCoprocessor_inputVerifier;
;
;
;
;
;
;
;
;
;
class MockCoprocessor {
    static async create(readonlyProvider, params) {
        const mc = new MockCoprocessor();
        var _params_coprocessorContractInterface;
        const coprocessorItf = (_params_coprocessorContractInterface = params.coprocessorContractInterface) !== null && _params_coprocessorContractInterface !== void 0 ? _params_coprocessorContractInterface : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$FHEVMExecutor$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVMExecutorPartialInterface"];
        __classPrivateFieldSet(mc, _MockCoprocessor_iterator, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$CoprocessorEventsIterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoprocessorEventsIterator"](coprocessorItf, params.coprocessorContractAddress, readonlyProvider, params.db.fromBlockNumber), "f");
        __classPrivateFieldSet(mc, _MockCoprocessor_handler, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$CoprocessorEventsHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoprocessorEventsHandler"](params.db), "f");
        __classPrivateFieldSet(mc, _MockCoprocessor_db, params.db, "f");
        __classPrivateFieldSet(mc, _MockCoprocessor_inputVerifier, await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputVerifier"].create(readonlyProvider, params.inputVerifierContractAddress), "f");
        __classPrivateFieldSet(mc, _MockCoprocessor_coprocessorSigners, params.coprocessorSigners, "f");
        return mc;
    }
    getDB() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockCoprocessor_db, "f") !== undefined, "MockCoprocessor not initialized");
        return __classPrivateFieldGet(this, _MockCoprocessor_db, "f");
    }
    async awaitCoprocessor() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockCoprocessor_iterator, "f") !== undefined, "MockCoprocessor not initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockCoprocessor_handler, "f") !== undefined, "MockCoprocessor not initialized");
        // Warning test: solidityCoverageRunning
        const events = await __classPrivateFieldGet(this, _MockCoprocessor_iterator, "f").next();
        for(let i = 0; i < events.length; ++i){
            await __classPrivateFieldGet(this, _MockCoprocessor_handler, "f").handleEvent(events[i]);
        }
    }
    async clearHandleDB() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockCoprocessor_db, "f") !== undefined, "MockCoprocessor not initialized");
        // Call awaitCoprocessor() to flush yet unprocessed events
        // This is critical otherwise we might have to process input handles that are
        // no more in the db. This is a scenario that randomly occurs between 2 reset
        // usually when running tests.
        await this.awaitCoprocessor();
        await __classPrivateFieldGet(this, _MockCoprocessor_db, "f").reset();
    }
    async handleEvmRevert(newBlockNumber) {
        console.log("HANDLE REVERT HERE!! " + newBlockNumber);
    }
    async insertHandleBytes32(handleBytes32Hex, clearTextHex, metadata) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockCoprocessor_db, "f") !== undefined, "MockCoprocessor not initialized");
        await __classPrivateFieldGet(this, _MockCoprocessor_db, "f").insertHandleBytes32(handleBytes32Hex, clearTextHex, metadata);
    }
    async queryHandlesBytes32AsHex(handlesBytes32) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockCoprocessor_db, "f") !== undefined, "MockCoprocessor not initialized");
        await this.awaitCoprocessor();
        const clearTextHexList = [];
        for(let i = 0; i < handlesBytes32.length; ++i){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32String"])(handlesBytes32[i]);
            let clearTextHex;
            try {
                clearTextHex = (await __classPrivateFieldGet(this, _MockCoprocessor_db, "f").queryHandleBytes32(handlesBytes32[i])).clearTextHex;
            } catch (e) {
                clearTextHex = "0x";
            }
            clearTextHexList.push(clearTextHex);
        }
        return clearTextHexList;
    }
    async computeCoprocessorSignatures(handlesBytes32List, contractChainId, contractAddress, userAddress, extraData) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockCoprocessor_inputVerifier, "f") !== undefined, "MockCoprocessor not initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockCoprocessor_coprocessorSigners, "f") !== undefined, "MockCoprocessor not initialized");
        const numHandles = handlesBytes32List.length;
        const handlesBytes32HexNoPrefixList = [];
        const handlesBytes32HexList = [];
        for(let index = 0; index < numHandles; ++index){
            const handleBytes32Hex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify(handlesBytes32List[index]);
            handlesBytes32HexList.push(handleBytes32Hex);
            handlesBytes32HexNoPrefixList.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePrefix"])(handleBytes32Hex, "0x"));
        }
        const eip712 = __classPrivateFieldGet(this, _MockCoprocessor_inputVerifier, "f").createCiphertextVerificationEIP712(handlesBytes32HexList, contractChainId, contractAddress, userAddress, extraData);
        const signaturesHex = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multiSignEIP712"])(__classPrivateFieldGet(this, _MockCoprocessor_coprocessorSigners, "f"), eip712.domain, eip712.types, eip712.message);
        // Remove 0x prefix
        const signatureHexNoPrefixList = signaturesHex.map((sigHex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePrefix"])(sigHex, "0x"));
        return {
            handles: handlesBytes32HexNoPrefixList,
            signatures: signatureHexNoPrefixList
        };
    }
    constructor(){
        _MockCoprocessor_iterator.set(this, void 0);
        _MockCoprocessor_handler.set(this, void 0);
        _MockCoprocessor_db.set(this, void 0);
        _MockCoprocessor_coprocessorSigners.set(this, void 0);
        _MockCoprocessor_inputVerifier.set(this, void 0);
    }
}
_MockCoprocessor_iterator = new WeakMap(), _MockCoprocessor_handler = new WeakMap(), _MockCoprocessor_db = new WeakMap(), _MockCoprocessor_coprocessorSigners = new WeakMap(), _MockCoprocessor_inputVerifier = new WeakMap(); //# sourceMappingURL=MockCoprocessor.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/DecryptionOracleEvents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDecryptionOracleEventName",
    ()=>isDecryptionOracleEventName
]);
function isDecryptionOracleEventName(value) {
    return value === "DecryptionRequest";
} //# sourceMappingURL=DecryptionOracleEvents.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/abi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecryptionOraclePartialInterface",
    ()=>DecryptionOraclePartialInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
const DecryptionOraclePartialInterface = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Interface([
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "counter",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "requestID",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bytes32[]",
                name: "cts",
                type: "bytes32[]"
            },
            {
                indexed: false,
                internalType: "address",
                name: "contractCaller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes4",
                name: "callbackSelector",
                type: "bytes4"
            }
        ],
        name: "DecryptionRequest",
        type: "event"
    }
]); //# sourceMappingURL=abi.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDecryptionOracleEvents",
    ()=>getDecryptionOracleEvents,
    "parseDecryptionRequestEventsFromLogs",
    ()=>parseDecryptionRequestEventsFromLogs,
    "toDecryptionRequestEvent",
    ()=>toDecryptionRequestEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$DecryptionOracleEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/DecryptionOracleEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/abi.js [app-client] (ecmascript)");
;
;
;
;
;
async function getDecryptionOracleEvents(decryptionOracleContractInterface, decryptionOracleContractAddress, readonlyProvider, options) {
    let currentBlockNumber = -1;
    let toBlock;
    if (options.toBlockNumber !== undefined) {
        toBlock = options.toBlockNumber;
    } else {
        currentBlockNumber = await readonlyProvider.getBlockNumber();
        toBlock = currentBlockNumber;
    }
    let fromBlock;
    if (options.fromBlockNumber !== undefined) {
        fromBlock = options.fromBlockNumber;
    } else {
        fromBlock = toBlock;
    }
    if (fromBlock > toBlock) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid block filter fromBlock=".concat(fromBlock, " toBlock=").concat(toBlock));
    }
    const eventDecryptionFragment = decryptionOracleContractInterface.getEvent("DecryptionRequest");
    if (!eventDecryptionFragment) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]('Unknown "DecryptionRequest" event');
    }
    // Wild card
    const topics = decryptionOracleContractInterface.encodeFilterTopics(eventDecryptionFragment, []);
    const filter = {
        address: decryptionOracleContractAddress,
        fromBlock,
        toBlock,
        topics
    };
    const logs = await readonlyProvider.getLogs(filter);
    const cursor = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockLogCursor"](-1);
    const events = logs.map((log)=>{
        try {
            cursor.updateForward(log.blockNumber, log.index);
            const parsedLog = decryptionOracleContractInterface.parseLog(log);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$DecryptionOracleEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDecryptionOracleEventName"])(parsedLog.name)) {
                return null;
            }
            if (log.blockNumber === fromBlock) {
                if (options.fromBlockLogIndex !== undefined) {
                    if (log.index < options.fromBlockLogIndex) {
                        return null;
                    }
                }
            }
            const evt = {
                eventName: parsedLog.name,
                args: parsedLog.args,
                index: log.index,
                blockNumber: log.blockNumber,
                transactionHash: log.transactionHash,
                transactionIndex: log.transactionIndex
            };
            return evt;
        } catch (e) {
            // If the log cannot be parsed, skip it
            return null;
        }
    }).filter((event)=>event !== null);
    return {
        events,
        cursor
    };
}
function toDecryptionRequestEvent(e) {
    if (e.eventName !== "DecryptionRequest") {
        return null;
    }
    const counter = e.args[0]; //uint256
    const requestID = e.args[1]; //uint256
    const handlesBytes32Hex = e.args[2]; //bytes32[]
    const contractCallerAddress = e.args[3]; //address
    const callbackSelectorBytes4Hex = e.args[4]; //bytes4
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBigUint256"])(counter, "DecryptionRequest", 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBigUint256"])(requestID, "DecryptionRequest", 1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(handlesBytes32Hex.length > 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes32String"])(handlesBytes32Hex[0], "DecryptionRequest", 2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsAddress"])(contractCallerAddress, "DecryptionRequest", 3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEventArgIsBytes4String"])(callbackSelectorBytes4Hex, "DecryptionRequest", 4);
    const evt = {
        blockNumber: e.blockNumber,
        index: e.index,
        transactionHash: e.transactionHash,
        transactionIndex: e.transactionIndex,
        counter,
        requestID,
        handlesBytes32Hex,
        contractCallerAddress,
        callbackSelectorBytes4Hex
    };
    return evt;
}
function parseDecryptionRequestEventsFromLogs(logs) {
    // flexible
    if (!logs) {
        return [];
    }
    const events = [];
    for (const log of logs){
        const event = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecryptionOraclePartialInterface"].parseLog(log);
        if (!event) {
            continue;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$DecryptionOracleEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDecryptionOracleEventName"])(event.name)) {
            continue;
        }
        const doe = {
            eventName: event.name,
            args: event.args,
            blockNumber: log.blockNumber,
            index: log.index,
            transactionHash: log.transactionHash,
            transactionIndex: log.transactionIndex
        };
        const e = toDecryptionRequestEvent(doe);
        if (!e) {
            continue;
        }
        events.push(e);
    }
    return events;
} //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/DecryptionOracleEventsHandler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecryptionOracleEventsHandler",
    ()=>DecryptionOracleEventsHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/KMSVerifier.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DecryptionOracleEventsHandler_db, _DecryptionOracleEventsHandler_kmsVerifier, _DecryptionOracleEventsHandler_kmsSigners, _DecryptionOracleEventsHandler_relayerSigner;
;
;
;
class DecryptionOracleEventsHandler {
    // coproc.await should have been called before
    async handleEvent(decryptionRequestEvent) {
        const clearTextsHex = [];
        const handlesBytes32Hex = [];
        for(let i = 0; i < decryptionRequestEvent.handlesBytes32Hex.length; ++i){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(decryptionRequestEvent.blockNumber >= __classPrivateFieldGet(this, _DecryptionOracleEventsHandler_db, "f").fromBlockNumber, "Unexpected event blockNumber: decryptionRequestEvent.blockNumber < this.#db.fromBlockNumber");
            // if (decryptionRequestEvent.blockNumber < this.#db.fromBlockNumber) {
            //   // Ignore. This is an old decryption request. This usually occurs when running
            //   // tests using Anvil
            //   continue;
            // }
            const entry = await __classPrivateFieldGet(this, _DecryptionOracleEventsHandler_db, "f").queryHandleBytes32(decryptionRequestEvent.handlesBytes32Hex[i]);
            // should have thrown an exception earlier
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(entry.clearTextHex !== "0x");
            clearTextsHex.push(entry.clearTextHex);
            handlesBytes32Hex.push(decryptionRequestEvent.handlesBytes32Hex[i]);
        }
        const extraDataV0 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].solidityPacked([
            "uint8"
        ], [
            0
        ]);
        const { calldata } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeDecryptionCallbackSignaturesAndCalldata"])(handlesBytes32Hex, clearTextsHex, extraDataV0, decryptionRequestEvent.requestID, decryptionRequestEvent.callbackSelectorBytes4Hex, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].AbiCoder.defaultAbiCoder(), __classPrivateFieldGet(this, _DecryptionOracleEventsHandler_kmsVerifier, "f"), __classPrivateFieldGet(this, _DecryptionOracleEventsHandler_kmsSigners, "f"));
        const txData = {
            to: decryptionRequestEvent.contractCallerAddress,
            data: calldata
        };
        const tx = await __classPrivateFieldGet(this, _DecryptionOracleEventsHandler_relayerSigner, "f").sendTransaction(txData);
        const receipt = await tx.wait();
        return {
            tx,
            receipt
        };
    }
    constructor(db, kmsVerifier, kmsSigners, relayerSigner){
        _DecryptionOracleEventsHandler_db.set(this, void 0);
        _DecryptionOracleEventsHandler_kmsVerifier.set(this, void 0);
        _DecryptionOracleEventsHandler_kmsSigners.set(this, void 0);
        _DecryptionOracleEventsHandler_relayerSigner.set(this, void 0);
        __classPrivateFieldSet(this, _DecryptionOracleEventsHandler_db, db, "f");
        __classPrivateFieldSet(this, _DecryptionOracleEventsHandler_kmsVerifier, kmsVerifier, "f");
        __classPrivateFieldSet(this, _DecryptionOracleEventsHandler_kmsSigners, kmsSigners, "f");
        __classPrivateFieldSet(this, _DecryptionOracleEventsHandler_relayerSigner, relayerSigner, "f");
    }
}
_DecryptionOracleEventsHandler_db = new WeakMap(), _DecryptionOracleEventsHandler_kmsVerifier = new WeakMap(), _DecryptionOracleEventsHandler_kmsSigners = new WeakMap(), _DecryptionOracleEventsHandler_relayerSigner = new WeakMap(); //# sourceMappingURL=DecryptionOracleEventsHandler.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/DecryptionOracleEventsIterator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecryptionOracleEventsIterator",
    ()=>DecryptionOracleEventsIterator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/utils.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DecryptionOracleEventsIterator_cursor, _DecryptionOracleEventsIterator_decryptionOracleContractInterface, _DecryptionOracleEventsIterator_decryptionOracleContractAddress, _DecryptionOracleEventsIterator_readonlyProvider;
;
;
;
;
class DecryptionOracleEventsIterator {
    async next() {
        // The oracle must detect any evm_revert call.
        // The coprocessor, however, can run even if evm_revert is called.
        let evmHasReverted = false;
        const currentBlockNumber = await __classPrivateFieldGet(this, _DecryptionOracleEventsIterator_readonlyProvider, "f").getBlockNumber();
        if (currentBlockNumber <= __classPrivateFieldGet(this, _DecryptionOracleEventsIterator_cursor, "f").blockNumber) {
            evmHasReverted = true;
            // send cursor backward since evm_revert has been executed
            __classPrivateFieldGet(this, _DecryptionOracleEventsIterator_cursor, "f").update(currentBlockNumber - 1, 0);
        }
        const { events, cursor } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecryptionOracleEvents"])(__classPrivateFieldGet(this, _DecryptionOracleEventsIterator_decryptionOracleContractInterface, "f"), __classPrivateFieldGet(this, _DecryptionOracleEventsIterator_decryptionOracleContractAddress, "f"), __classPrivateFieldGet(this, _DecryptionOracleEventsIterator_readonlyProvider, "f"), {
            fromBlockNumber: __classPrivateFieldGet(this, _DecryptionOracleEventsIterator_cursor, "f").nextBlockNumber,
            toBlockNumber: currentBlockNumber
        });
        if (!cursor.isEmpty) {
            // events can be empty here!
            __classPrivateFieldGet(this, _DecryptionOracleEventsIterator_cursor, "f").updateForward(cursor.blockNumber, cursor.blockLogIndex);
        } else {
            // if the cursor has not progressed, then necessarily the events array
            // must be empty.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(events.length === 0);
        }
        return {
            events,
            evmHasReverted,
            currentBlockNumber
        };
    }
    constructor(decryptionOracleContractInterface, decryptionOracleContractAddress, readonlyProvider, fromBlockNumber){
        _DecryptionOracleEventsIterator_cursor.set(this, void 0);
        _DecryptionOracleEventsIterator_decryptionOracleContractInterface.set(this, void 0);
        _DecryptionOracleEventsIterator_decryptionOracleContractAddress.set(this, void 0);
        _DecryptionOracleEventsIterator_readonlyProvider.set(this, void 0);
        __classPrivateFieldSet(this, _DecryptionOracleEventsIterator_decryptionOracleContractInterface, decryptionOracleContractInterface, "f");
        __classPrivateFieldSet(this, _DecryptionOracleEventsIterator_decryptionOracleContractAddress, decryptionOracleContractAddress, "f");
        __classPrivateFieldSet(this, _DecryptionOracleEventsIterator_readonlyProvider, readonlyProvider, "f");
        __classPrivateFieldSet(this, _DecryptionOracleEventsIterator_cursor, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockLogCursor"](fromBlockNumber), "f");
    }
}
_DecryptionOracleEventsIterator_cursor = new WeakMap(), _DecryptionOracleEventsIterator_decryptionOracleContractInterface = new WeakMap(), _DecryptionOracleEventsIterator_decryptionOracleContractAddress = new WeakMap(), _DecryptionOracleEventsIterator_readonlyProvider = new WeakMap(); //# sourceMappingURL=DecryptionOracleEventsIterator.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/MockDecryptionOracle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockDecryptionOracle",
    ()=>MockDecryptionOracle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$ACL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/ACL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/KMSVerifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$DecryptionOracleEventsHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/DecryptionOracleEventsHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$DecryptionOracleEventsIterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/DecryptionOracleEventsIterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/abi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/utils.js [app-client] (ecmascript)");
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _MockDecryptionOracleDB_map, _MockDecryptionOracle_iterator, _MockDecryptionOracle_handler, _MockDecryptionOracle_readonlyProvider, _MockDecryptionOracle_coprocessor, _MockDecryptionOracle_requestDB, _MockDecryptionOracle_acl, _MockDecryptionOracle_kmsVerifier, _MockDecryptionOracle_kmsSigners;
;
;
;
;
;
;
;
;
class MockDecryptionOracleDB {
    static key(event, counterOverride) {
        return "".concat(Number(counterOverride !== null && counterOverride !== void 0 ? counterOverride : event.counter), "}");
    }
    tryQuery(event) {
        return __classPrivateFieldGet(this, _MockDecryptionOracleDB_map, "f").get(MockDecryptionOracleDB.key(event));
    }
    delete(event) {
        __classPrivateFieldGet(this, _MockDecryptionOracleDB_map, "f").delete(MockDecryptionOracleDB.key(event));
    }
    setPending(event, evmHasReverted) {
        if (this.has(event) && !evmHasReverted) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Decryption Request counter=".concat(event.counter, ", requestID=").concat(event.requestID, ", contractCaller=").concat(event.contractCallerAddress, " already registered"));
        }
        const entry = {
            event: {
                counter: Number(event.counter),
                requestID: Number(event.requestID),
                contractCallerAddress: event.contractCallerAddress,
                index: event.index,
                blockNumber: event.blockNumber,
                transactionHash: event.transactionHash,
                transactionIndex: event.transactionIndex
            },
            callbackBlockNumber: -1,
            callbackTransactionHash: undefined,
            callbackReverted: undefined,
            pending: true
        };
        __classPrivateFieldGet(this, _MockDecryptionOracleDB_map, "f").set(MockDecryptionOracleDB.key(event), entry);
        return entry;
    }
    isPending(event) {
        const entry = __classPrivateFieldGet(this, _MockDecryptionOracleDB_map, "f").get(MockDecryptionOracleDB.key(event));
        if (!entry) {
            return false;
        }
        return entry.pending;
    }
    executed(event) {
        const entry = __classPrivateFieldGet(this, _MockDecryptionOracleDB_map, "f").get(MockDecryptionOracleDB.key(event));
        if (!entry) {
            return false;
        }
        return !entry.pending;
    }
    has(event) {
        return __classPrivateFieldGet(this, _MockDecryptionOracleDB_map, "f").has(MockDecryptionOracleDB.key(event));
    }
    constructor(){
        _MockDecryptionOracleDB_map.set(this, new Map());
    }
}
_MockDecryptionOracleDB_map = new WeakMap();
class MockDecryptionOracle {
    static async create(readonlyProvider, params) {
        const mdo = new MockDecryptionOracle();
        const db = params.coprocessor.getDB();
        var _params_decryptionOracleContractInterface;
        const decryptionOracleContractItf = (_params_decryptionOracleContractInterface = params.decryptionOracleContractInterface) !== null && _params_decryptionOracleContractInterface !== void 0 ? _params_decryptionOracleContractInterface : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecryptionOraclePartialInterface"];
        __classPrivateFieldSet(mdo, _MockDecryptionOracle_readonlyProvider, readonlyProvider, "f");
        __classPrivateFieldSet(mdo, _MockDecryptionOracle_coprocessor, params.coprocessor, "f");
        __classPrivateFieldSet(mdo, _MockDecryptionOracle_iterator, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$DecryptionOracleEventsIterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecryptionOracleEventsIterator"](decryptionOracleContractItf, params.decryptionOracleContractAddress, readonlyProvider, db.fromBlockNumber), "f");
        __classPrivateFieldSet(mdo, _MockDecryptionOracle_kmsVerifier, await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KMSVerifier"].create(readonlyProvider, params.kmsVerifierContractAddress), "f");
        __classPrivateFieldSet(mdo, _MockDecryptionOracle_acl, await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$ACL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACL"].create(readonlyProvider, params.aclContractAddress), "f");
        __classPrivateFieldSet(mdo, _MockDecryptionOracle_handler, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$DecryptionOracleEventsHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecryptionOracleEventsHandler"](db, __classPrivateFieldGet(mdo, _MockDecryptionOracle_kmsVerifier, "f"), params.kmsSigners, params.relayerSigner), "f");
        __classPrivateFieldSet(mdo, _MockDecryptionOracle_kmsSigners, params.kmsSigners, "f");
        return mdo;
    }
    async createDecryptionSignatures(handlesBytes32Hex, clearTextValues, extraData) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockDecryptionOracle_kmsVerifier, "f") !== undefined, "MockDecryptionOracle not initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockDecryptionOracle_kmsSigners, "f") !== undefined, "MockDecryptionOracle not initialized");
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeDecryptionSignatures"])(handlesBytes32Hex, clearTextValues, extraData, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].AbiCoder.defaultAbiCoder(), __classPrivateFieldGet(this, _MockDecryptionOracle_kmsVerifier, "f"), __classPrivateFieldGet(this, _MockDecryptionOracle_kmsSigners, "f"));
        return {
            decryptedResult: res.decryptedResult,
            signatures: res.signatures
        };
    }
    async awaitDecryptionOracle() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockDecryptionOracle_coprocessor, "f") !== undefined, "MockDecryptionOracle not initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockDecryptionOracle_iterator, "f") !== undefined, "MockDecryptionOracle not initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockDecryptionOracle_readonlyProvider, "f") !== undefined, "MockDecryptionOracle not initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockDecryptionOracle_acl, "f") !== undefined, "MockDecryptionOracle not initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockDecryptionOracle_handler, "f") !== undefined, "MockDecryptionOracle not initialized");
        // Required (healthier to do it even if events in empty)
        await __classPrivateFieldGet(this, _MockDecryptionOracle_coprocessor, "f").awaitCoprocessor();
        // Warning test: solidityCoverageRunning
        const { events, evmHasReverted } = await __classPrivateFieldGet(this, _MockDecryptionOracle_iterator, "f").next();
        for(let i = 0; i < events.length; ++i){
            const dre = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDecryptionRequestEvent"])(events[i]);
            if (!dre) {
                continue;
            }
            // Should not process an already processed event
            if (__classPrivateFieldGet(this, _MockDecryptionOracle_requestDB, "f").isPending(dre)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("DecryptionRequest requestID=".concat(dre.requestID, ", contractCaller=").concat(dre.contractCallerAddress, " already being executed."));
            }
            // First throw if ACL permission failed.
            await __classPrivateFieldGet(this, _MockDecryptionOracle_acl, "f").checkIsAllowedForDecryption(dre.handlesBytes32Hex, __classPrivateFieldGet(this, _MockDecryptionOracle_readonlyProvider, "f"));
            // This is not formally exact. We pass a flag indicating that the evm has reverted to a given
            // snapshot id. This can only occur on dev chains.
            const newEntry = __classPrivateFieldGet(this, _MockDecryptionOracle_requestDB, "f").setPending(dre, evmHasReverted);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(newEntry.pending);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(newEntry.callbackBlockNumber === -1);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(newEntry.callbackReverted === undefined);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(newEntry.callbackTransactionHash === undefined);
            try {
                const { tx, receipt } = await __classPrivateFieldGet(this, _MockDecryptionOracle_handler, "f").handleEvent(dre);
                newEntry.callbackBlockNumber = receipt === null || receipt === void 0 ? void 0 : receipt.blockNumber;
                newEntry.callbackReverted = (receipt === null || receipt === void 0 ? void 0 : receipt.status) === 0;
                newEntry.callbackTransactionHash = tx.hash;
                newEntry.pending = false;
            } catch (e) {
                __classPrivateFieldGet(this, _MockDecryptionOracle_requestDB, "f").delete(dre);
                throw e;
            }
        }
    }
    constructor(){
        _MockDecryptionOracle_iterator.set(this, void 0);
        _MockDecryptionOracle_handler.set(this, void 0);
        _MockDecryptionOracle_readonlyProvider.set(this, void 0);
        _MockDecryptionOracle_coprocessor.set(this, void 0);
        _MockDecryptionOracle_requestDB.set(this, new MockDecryptionOracleDB());
        _MockDecryptionOracle_acl.set(this, void 0);
        _MockDecryptionOracle_kmsVerifier.set(this, void 0);
        _MockDecryptionOracle_kmsSigners.set(this, void 0);
    }
}
_MockDecryptionOracle_iterator = new WeakMap(), _MockDecryptionOracle_handler = new WeakMap(), _MockDecryptionOracle_readonlyProvider = new WeakMap(), _MockDecryptionOracle_coprocessor = new WeakMap(), _MockDecryptionOracle_requestDB = new WeakMap(), _MockDecryptionOracle_acl = new WeakMap(), _MockDecryptionOracle_kmsVerifier = new WeakMap(), _MockDecryptionOracle_kmsSigners = new WeakMap(); //# sourceMappingURL=MockDecryptionOracle.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/MockRelayerEncryptedInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockRelayerEncryptedInput",
    ()=>MockRelayerEncryptedInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FheType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmHandle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/InputVerifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/MockRelayer.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MockRelayerEncryptedInput_clearTextValues, _MockRelayerEncryptedInput_fhevmTypes, _MockRelayerEncryptedInput_fheTypes, _MockRelayerEncryptedInput_totalFheBits, _MockRelayerEncryptedInput_contractChainId, _MockRelayerEncryptedInput_contractAddress, _MockRelayerEncryptedInput_userAddress, _MockRelayerEncryptedInput_relayerProvider, _MockRelayerEncryptedInput_aclContractAddress, _MockRelayerEncryptedInput_inputVerifier;
;
;
;
;
;
;
;
;
;
;
;
class MockRelayerEncryptedInput {
    get userAddress() {
        return __classPrivateFieldGet(this, _MockRelayerEncryptedInput_userAddress, "f");
    }
    get contractAddress() {
        return __classPrivateFieldGet(this, _MockRelayerEncryptedInput_contractAddress, "f");
    }
    _checkAddFheBits(fheBitLen) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(fheBitLen >= 0);
        if (__classPrivateFieldGet(this, _MockRelayerEncryptedInput_totalFheBits, "f") + fheBitLen > MockRelayerEncryptedInput.MAX_FHE_BITS) {
            throw Error("Packing more than 2048 bits in a single input ciphertext is unsupported");
        }
        if (__classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f").length + 1 > MockRelayerEncryptedInput.MAX_VAR_COUNT) {
            throw Error("Packing more than 256 variables in a single input ciphertext is unsupported");
        }
    }
    _addClearTextValueFheBitsPair(clearTextValue, fhevmType) {
        // Bool = 2
        const fheType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmTypeToFheType"])(fhevmType);
        const fheBitLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFheTypeBitLength"])(fheType);
        this._checkAddFheBits(fheBitLen);
        __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fhevmTypes, "f").push(fhevmType);
        __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fheTypes, "f").push(fheType);
        __classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f").push(clearTextValue);
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_totalFheBits, __classPrivateFieldGet(this, _MockRelayerEncryptedInput_totalFheBits, "f") + fheBitLen, "f");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f").length <= MockRelayerEncryptedInput.MAX_VAR_COUNT);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockRelayerEncryptedInput_totalFheBits, "f") <= MockRelayerEncryptedInput.MAX_FHE_BITS);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f").length === __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fheTypes, "f").length);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f").length === __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fhevmTypes, "f").length);
    }
    _addBytes(clearTextValue, fhevmType) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmEbytes"])(fhevmType));
        const fhevmTypeInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFhevmTypeInfo"])(fhevmType);
        const fheBitLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFheTypeBitLength"])(fhevmTypeInfo.fheType);
        const clearTextBitLen = fhevmTypeInfo.clearTextBitLength;
        // For bytes, cleatText bit length and cypherText bit length are the same
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(clearTextBitLen === fheBitLen);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(fheBitLen % 8 === 0);
        const fheByteLen = fheBitLen / 8;
        if (clearTextValue.length > fheByteLen) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Uncorrect length of input Uint8Array, should be ".concat(fheByteLen, " for an ").concat(fhevmTypeInfo.name));
        }
        const clearTextValueBigInt = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBigInt(clearTextValue);
        const maxClearTextValueBigInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaxBigInt"])(clearTextBitLen);
        //const clearTextValueBigInt : bigint = bytesToBigInt(clearTextValue);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(clearTextValue.length * 8 === fheBitLen);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(clearTextValueBigInt <= maxClearTextValueBigInt);
        this._addClearTextValueFheBitsPair(clearTextValueBigInt, fhevmType);
        return this;
    }
    _addUint(clearTextValue, fhevmzType) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmEuint"])(fhevmzType));
        const fhevmTypeInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFhevmTypeInfo"])(fhevmzType);
        const clearTextBitLen = fhevmTypeInfo.clearTextBitLength;
        if (clearTextValue < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid unsigned integer value ".concat(clearTextValue));
        }
        const clearTextValueBigInt = BigInt(clearTextValue);
        const maxClearTextValueBigInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaxBigInt"])(clearTextBitLen);
        if (clearTextValueBigInt > maxClearTextValueBigInt) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid ".concat(fhevmTypeInfo.solidityTypeName, " value: ").concat(clearTextValue, ", it exceeds the maximum allowed value of ").concat(maxClearTextValueBigInt, "."));
        }
        this._addClearTextValueFheBitsPair(clearTextValueBigInt, fhevmzType);
        return this;
    }
    // Accepts : 0, 1, true, false
    addBool(value) {
        const zeroOrOneBigInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolToBigInt"])(value);
        this._addClearTextValueFheBitsPair(zeroOrOneBigInt, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebool);
        return this;
    }
    add8(value) {
        return this._addUint(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint8);
    }
    add16(value) {
        return this._addUint(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint16);
    }
    add32(value) {
        return this._addUint(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint32);
    }
    add64(value) {
        return this._addUint(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint64);
    }
    add128(value) {
        return this._addUint(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint128);
    }
    addAddress(value) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(value)) {
            throw new Error("Invalid address value: ${value}.");
        }
        const clearTextValue = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(value);
        this._addClearTextValueFheBitsPair(clearTextValue, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].eaddress);
        return this;
    }
    add256(value) {
        return this._addUint(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint256);
    }
    addBytes64(value) {
        return this._addBytes(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebytes64);
    }
    addBytes128(value) {
        return this._addBytes(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebytes128);
    }
    addBytes256(value) {
        return this._addBytes(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebytes256);
    }
    _toMockFhevmRelayerV1InputProofPayload(extraData) {
        const numHandles = __classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f").length;
        const clearTextValuesBigIntHex = [];
        const clearTextValuesBigInt = [];
        const rand32BufferList = [];
        const metadatas = [];
        //const randomBytes = EthersT.getBytes("0xd3f33f613ae8521e98fe2aa43bd0c6ad37d81c388c93460b78683e692602b981");
        for(let i = 0; i < numHandles; ++i){
            const clearTextValueBigInt = BigInt(__classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f")[i]);
            clearTextValuesBigInt.push(clearTextValueBigInt);
            clearTextValuesBigIntHex.push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(clearTextValueBigInt));
            rand32BufferList.push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].randomBytes(32));
            //rand32BufferList.push(randomBytes);
            metadatas.push({
                blockNumber: 0,
                index: 0,
                transactionHash: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash
            });
        }
        const mockCiphertextWithInputVerification = MockRelayerEncryptedInput._computeMockCiphertextWithZKProof(clearTextValuesBigInt, __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fheTypes, "f"), rand32BufferList);
        const mockData = {
            clearTextValuesBigIntHex,
            metadatas,
            fheTypes: __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fheTypes, "f"),
            fhevmTypes: __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fhevmTypes, "f"),
            aclContractAddress: __classPrivateFieldGet(this, _MockRelayerEncryptedInput_aclContractAddress, "f"),
            random32List: rand32BufferList.map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify)
        };
        const mockPayload = {
            contractAddress: __classPrivateFieldGet(this, _MockRelayerEncryptedInput_contractAddress, "f"),
            userAddress: __classPrivateFieldGet(this, _MockRelayerEncryptedInput_userAddress, "f"),
            ciphertextWithInputVerification: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify(mockCiphertextWithInputVerification),
            contractChainId: "0x" + __classPrivateFieldGet(this, _MockRelayerEncryptedInput_contractChainId, "f").toString(16),
            extraData,
            mockData
        };
        return mockPayload;
    }
    static _computeMockCiphertextWithZKProof(clearTextValuesBigInt, fheTypes, rand32BufferList) {
        let encrypted = new Uint8Array(0);
        const numHandles = clearTextValuesBigInt.length;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(rand32BufferList.length === numHandles);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(fheTypes.length === numHandles);
        // 1. Build the typed values hash
        for(let i = 0; i < numHandles; ++i){
            /*
              type + value as bigint + random(32)
            */ const clearTextValueBigInt = clearTextValuesBigInt[i];
            const fheByteLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFheTypeByteLength"])(fheTypes[i]);
            const fheType1Byte = new Uint8Array([
                fheTypes[i]
            ]);
            const clearTextValueXXBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uintToBytes"])(clearTextValueBigInt, fheByteLen);
            const rand32Buffer = rand32BufferList[i];
            // concatenate 32 random bytes at the end of buffer to simulate encryption noise
            encrypted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(encrypted, fheType1Byte, clearTextValueXXBytes, rand32Buffer);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].keccak256(encrypted));
    }
    async encrypt() {
        const extraData = "0x00";
        /*
          Mock equivalent to https://github.com/zama-ai/fhevm-js/blob/main/src/relayer/sendEncryption.ts
    
          From sendEncryption.ts:
          =======================
    
            const bits = input.getBits();
            const ciphertext = input.encrypt();
            const payload = {
              contractAddress: getAddress(contractAddress),
              userAddress: getAddress(userAddress),
              ciphertextWithInputVerification: toHexString(ciphertext),
              contractChainId: '0x' + chainId.toString(16),
            };
    
        */ const payload = this._toMockFhevmRelayerV1InputProofPayload(extraData);
        const mockCiphertextWithZKProof = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getBytes(payload.ciphertextWithInputVerification);
        /*
          Mock equivalent to https://github.com/zama-ai/fhevm-js/blob/main/src/relayer/sendEncryption.ts
    
            const url = `${relayerUrl}/v1/input-proof`;
            ...
            const response = await fetch(url, options);
            ...
    
          Will add the clear values to the mock database.
        */ /*
          const payload = {
              contractAddress: getAddress(contractAddress),
              userAddress: getAddress(userAddress),
              ciphertextWithInputVerification: toHexString(ciphertext),
              contractChainId: '0x' + chainId.toString(16),
            };
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            };
        */ const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestRelayerV1InputProof"](__classPrivateFieldGet(this, _MockRelayerEncryptedInput_relayerProvider, "f"), payload);
        const handlesBytes32List = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].computeHandles(mockCiphertextWithZKProof, __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fhevmTypes, "f"), __classPrivateFieldGet(this, _MockRelayerEncryptedInput_aclContractAddress, "f"), __classPrivateFieldGet(this, _MockRelayerEncryptedInput_contractChainId, "f"), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].FHEVM_HANDLE_VERSION);
        __classPrivateFieldGet(this, _MockRelayerEncryptedInput_inputVerifier, "f").verifySignatures(handlesBytes32List, __classPrivateFieldGet(this, _MockRelayerEncryptedInput_userAddress, "f"), __classPrivateFieldGet(this, _MockRelayerEncryptedInput_contractAddress, "f"), __classPrivateFieldGet(this, _MockRelayerEncryptedInput_contractChainId, "f"), extraData, response.signatures);
        const inputProofHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeInputProofHex"])(response.handles, response.signatures, extraData);
        return {
            handles: handlesBytes32List,
            inputProof: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeArray(inputProofHex)
        };
    }
    getBits() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("ZKInput interface method: Not supported in mock mode");
    }
    constructor(relayerProvider, contractChainId, contractAddress, userAddress, aclContractAddress, inputVerifier){
        _MockRelayerEncryptedInput_clearTextValues.set(this, []);
        _MockRelayerEncryptedInput_fhevmTypes.set(this, []);
        _MockRelayerEncryptedInput_fheTypes.set(this, []);
        _MockRelayerEncryptedInput_totalFheBits.set(this, 0);
        _MockRelayerEncryptedInput_contractChainId.set(this, void 0);
        _MockRelayerEncryptedInput_contractAddress.set(this, void 0);
        _MockRelayerEncryptedInput_userAddress.set(this, void 0);
        _MockRelayerEncryptedInput_relayerProvider.set(this, void 0);
        _MockRelayerEncryptedInput_aclContractAddress.set(this, void 0);
        _MockRelayerEncryptedInput_inputVerifier.set(this, void 0);
        // Check if chainId exceeds 8 bytes
        if (BigInt(contractChainId) > __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_UINT64"]) {
            throw new Error("ChainId exceeds maximum allowed value (8 bytes)"); // fhevm assumes chainID is only taking up to 8 bytes
        }
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_relayerProvider, relayerProvider, "f");
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_contractChainId, contractChainId, "f");
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_contractAddress, contractAddress, "f");
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_userAddress, userAddress, "f");
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_aclContractAddress, aclContractAddress, "f");
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_inputVerifier, inputVerifier, "f");
    }
}
_MockRelayerEncryptedInput_clearTextValues = new WeakMap(), _MockRelayerEncryptedInput_fhevmTypes = new WeakMap(), _MockRelayerEncryptedInput_fheTypes = new WeakMap(), _MockRelayerEncryptedInput_totalFheBits = new WeakMap(), _MockRelayerEncryptedInput_contractChainId = new WeakMap(), _MockRelayerEncryptedInput_contractAddress = new WeakMap(), _MockRelayerEncryptedInput_userAddress = new WeakMap(), _MockRelayerEncryptedInput_relayerProvider = new WeakMap(), _MockRelayerEncryptedInput_aclContractAddress = new WeakMap(), _MockRelayerEncryptedInput_inputVerifier = new WeakMap();
Object.defineProperty(MockRelayerEncryptedInput, "MAX_FHE_BITS", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 2048
});
Object.defineProperty(MockRelayerEncryptedInput, "MAX_VAR_COUNT", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 256
}); //# sourceMappingURL=MockRelayerEncryptedInput.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/relayer/decryptUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    Copy/Paste from https://github.com/zama-ai/relayer-sdk/blob/main/src/relayer/decryptUtils.ts#L18
*/ // Duplicated code from relayer-sdk/src/relayer/userDecrypt.ts
__turbopack_context__.s([
    "checkEncryptedBits",
    ()=>checkEncryptedBits
]);
const NumEncryptedBits = {
    0: 2,
    2: 8,
    3: 16,
    4: 32,
    5: 64,
    6: 128,
    7: 160,
    8: 256
};
function checkEncryptedBits(handles) {
    let total = 0;
    for (const handle of handles){
        if (handle.length !== 66) {
            throw new Error("Handle ".concat(handle, " is not of valid length"));
        }
        const hexPair = handle.slice(-4, -2).toLowerCase();
        const typeDiscriminant = parseInt(hexPair, 16);
        if (!(typeDiscriminant in NumEncryptedBits)) {
            throw new Error("Handle ".concat(handle, " is not of valid type"));
        }
        total += NumEncryptedBits[typeDiscriminant];
        // enforce 2048‑bit limit
        if (total > 2048) {
            throw new Error("Cannot decrypt more than 2048 encrypted bits in a single request");
        }
    }
    return total;
} //# sourceMappingURL=decryptUtils.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/relayer/publicDecrypt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    Copy/Paste from https://github.com/zama-ai/relayer-sdk/blob/main/src/relayer/publicDecrypt.ts
*/ __turbopack_context__.s([
    "deserializeDecryptedResult",
    ()=>deserializeDecryptedResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
// Duplicated code from relayer-sdk/src/relayer/publicDecrypt.ts
const CiphertextType = {
    0: "bool",
    2: "uint256",
    3: "uint256",
    4: "uint256",
    5: "uint256",
    6: "uint256",
    7: "address",
    8: "uint256"
};
function deserializeDecryptedResult(handles, decryptedResult) {
    let typesList = [];
    for (const handle of handles){
        const hexPair = handle.slice(-4, -2).toLowerCase();
        const typeDiscriminant = parseInt(hexPair, 16);
        typesList.push(typeDiscriminant);
    }
    const restoredEncoded = "0x" + "00".repeat(32) + // dummy requestID (ignored)
    decryptedResult.slice(2) + "00".repeat(32); // dummy empty bytes[] length (ignored)
    const abiTypes = typesList.map((t)=>{
        const abiType = CiphertextType[t]; // all types are valid because this was supposedly checked already inside the `checkEncryptedBits` function
        return abiType;
    });
    const coder = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].AbiCoder();
    const decoded = coder.decode([
        "uint256",
        ...abiTypes,
        "bytes[]"
    ], restoredEncoded);
    // strip dummy first/last element
    const rawValues = decoded.slice(1, 1 + typesList.length);
    let results = {};
    handles.forEach((handle, idx)=>results[handle] = rawValues[idx]);
    return results;
} //# sourceMappingURL=publicDecrypt.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/relayer/userDecrypt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    This file contains duplicated code from relayer-sdk/src/relayer/userDecrypt.ts
*/ __turbopack_context__.s([
    "buildUserDecryptedResult",
    ()=>buildUserDecryptedResult,
    "checkDeadlineValidity",
    ()=>checkDeadlineValidity,
    "checkMaxContractAddresses",
    ()=>checkMaxContractAddresses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
;
;
const MAX_USER_DECRYPT_CONTRACT_ADDRESSES = 10;
const MAX_USER_DECRYPT_DURATION_DAYS = 365n;
function checkDeadlineValidity(startTimestamp, durationDays) {
    if (durationDays === BigInt(0)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("durationDays is null");
    }
    if (durationDays > MAX_USER_DECRYPT_DURATION_DAYS) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("durationDays is above max duration of ".concat(MAX_USER_DECRYPT_DURATION_DAYS));
    }
    const currentTimestamp = BigInt(Math.floor(Date.now() / 1000));
    if (startTimestamp > currentTimestamp) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("startTimestamp is set in the future");
    }
    const durationInSeconds = durationDays * BigInt(86400);
    if (startTimestamp + durationInSeconds < currentTimestamp) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("User decrypt request has expired");
    }
}
// Duplicated code from relayer-sdk/src/relayer/userDecrypt.ts
function formatAccordingToType(decryptedBigInt, type) {
    if (type === 0) {
        // ebool
        return decryptedBigInt === BigInt(1);
    } else if (type === 7) {
        // eaddress
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress("0x" + decryptedBigInt.toString(16).padStart(40, "0"));
    } else if (type === 9) {
        // ebytes64
        return "0x" + decryptedBigInt.toString(16).padStart(128, "0");
    } else if (type === 10) {
        // ebytes128
        return "0x" + decryptedBigInt.toString(16).padStart(256, "0");
    } else if (type === 11) {
        // ebytes256
        return "0x" + decryptedBigInt.toString(16).padStart(512, "0");
    } // euintXXX
    return decryptedBigInt;
}
function buildUserDecryptedResult(handles, listBigIntDecryptions) {
    let typesList = [];
    for (const handle of handles){
        const hexPair = handle.slice(-4, -2).toLowerCase();
        const typeDiscriminant = parseInt(hexPair, 16);
        typesList.push(typeDiscriminant);
    }
    let results = {};
    handles.forEach((handle, idx)=>results[handle] = formatAccordingToType(listBigIntDecryptions[idx], typesList[idx]));
    return results;
}
function checkMaxContractAddresses(contractAddresses) {
    const contractAddressesLength = contractAddresses.length;
    if (contractAddressesLength === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("contractAddresses is empty");
    }
    if (contractAddressesLength > MAX_USER_DECRYPT_CONTRACT_ADDRESSES) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("contractAddresses max length of ".concat(MAX_USER_DECRYPT_CONTRACT_ADDRESSES, " exceeded"));
    }
} //# sourceMappingURL=userDecrypt.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/sdk/keypair.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEIP712",
    ()=>createEIP712,
    "generateKeypair",
    ()=>generateKeypair
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
// Follows relayer-sdk keys lengths
const ML_KEM_CT_PK_LENGTH = 1568;
const ML_KEM_SK_LENGTH = 3168;
const PUBLIC_KEY_LENGTH = (ML_KEM_CT_PK_LENGTH + 8) * 2;
const PRIVATE_KEY_LENGTH = (ML_KEM_SK_LENGTH + 8) * 2;
function _verifyKeypair(keyPair) {
    keyPair.publicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove0x"])(keyPair.publicKey);
    keyPair.privateKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove0x"])(keyPair.privateKey);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isHexString("0x" + keyPair.publicKey, PUBLIC_KEY_LENGTH)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid key pair's publicKey. Call FhevmInstance.generateKeyPair() to generate a valid FHEVM key pair.");
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isHexString("0x" + keyPair.privateKey, PRIVATE_KEY_LENGTH)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid key pair's publicKey. Call FhevmInstance.generateKeyPair() to generate a valid FHEVM key pair.");
    }
}
function generateKeypair() {
    const wallet = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Wallet.createRandom();
    const walletPublicKeyNoPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove0x"])(wallet.publicKey);
    const walletPrivateKeyNoPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove0x"])(wallet.privateKey);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(walletPublicKeyNoPrefix.length === walletPrivateKeyNoPrefix.length + 2);
    const publicKeyPrefixLen = 2 * PUBLIC_KEY_LENGTH - walletPublicKeyNoPrefix.length;
    const privateKeyPrefixLen = 2 * PRIVATE_KEY_LENGTH - (2 + walletPrivateKeyNoPrefix.length);
    let n = Math.floor(publicKeyPrefixLen / 8);
    const publicKeyPrefix = "deadbeef".repeat(n) + "0".repeat(publicKeyPrefixLen - n * 8);
    n = Math.floor(privateKeyPrefixLen / 8);
    const privateKeyPrefix = "deadbeef".repeat(n) + "0".repeat(privateKeyPrefixLen - n * 8);
    const publicKey = "0x" + publicKeyPrefix + walletPublicKeyNoPrefix;
    const privateKey = "0x" + privateKeyPrefix + "00" + walletPrivateKeyNoPrefix;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(publicKey.length === 2 + 2 * PUBLIC_KEY_LENGTH);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(privateKey.length === 2 + 2 * PRIVATE_KEY_LENGTH);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(walletPublicKeyNoPrefix.length === 66);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(walletPrivateKeyNoPrefix.length === 64);
    const keypair = {
        publicKey,
        privateKey
    };
    _verifyKeypair(keypair);
    return keypair;
}
const createEIP712 = (verifyingContract, contractsChainId)=>(publicKey, contractAddresses, startTimestamp, durationDays, delegatedAccount)=>{
        const extraData = "0x00";
        if (delegatedAccount && !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(delegatedAccount)) throw new Error("Invalid delegated account.");
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(verifyingContract)) {
            throw new Error("Invalid verifying contract address.");
        }
        if (!contractAddresses.every((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(c))) {
            throw new Error("Invalid contract address.");
        }
        // Format the public key based on its type
        const formattedPublicKey = typeof publicKey === "string" ? publicKey.startsWith("0x") ? publicKey : "0x".concat(publicKey) : publicKey;
        // Convert timestamps to strings if they're bigints
        const formattedStartTimestamp = typeof startTimestamp === "number" ? startTimestamp.toString() : startTimestamp;
        const formattedDurationDays = typeof durationDays === "number" ? durationDays.toString() : durationDays;
        const EIP712Domain = [
            {
                name: "name",
                type: "string"
            },
            {
                name: "version",
                type: "string"
            },
            {
                name: "chainId",
                type: "uint256"
            },
            {
                name: "verifyingContract",
                type: "address"
            }
        ];
        const domain = {
            name: "Decryption",
            version: "1",
            chainId: contractsChainId,
            verifyingContract
        };
        if (delegatedAccount) {
            return {
                types: {
                    EIP712Domain,
                    DelegatedUserDecryptRequestVerification: [
                        {
                            name: "publicKey",
                            type: "bytes"
                        },
                        {
                            name: "contractAddresses",
                            type: "address[]"
                        },
                        {
                            name: "contractsChainId",
                            type: "uint256"
                        },
                        {
                            name: "startTimestamp",
                            type: "uint256"
                        },
                        {
                            name: "durationDays",
                            type: "uint256"
                        },
                        {
                            name: "extraData",
                            type: "bytes"
                        },
                        {
                            name: "delegatedAccount",
                            type: "address"
                        }
                    ]
                },
                primaryType: "DelegatedUserDecryptRequestVerification",
                domain,
                message: {
                    publicKey: formattedPublicKey,
                    contractAddresses,
                    contractsChainId,
                    startTimestamp: formattedStartTimestamp,
                    durationDays: formattedDurationDays,
                    extraData,
                    delegatedAccount: delegatedAccount
                }
            };
        }
        return {
            types: {
                EIP712Domain,
                UserDecryptRequestVerification: [
                    {
                        name: "publicKey",
                        type: "bytes"
                    },
                    {
                        name: "contractAddresses",
                        type: "address[]"
                    },
                    {
                        name: "contractsChainId",
                        type: "uint256"
                    },
                    {
                        name: "startTimestamp",
                        type: "uint256"
                    },
                    {
                        name: "durationDays",
                        type: "uint256"
                    },
                    {
                        name: "extraData",
                        type: "bytes"
                    }
                ]
            },
            primaryType: "UserDecryptRequestVerification",
            domain,
            message: {
                publicKey: formattedPublicKey,
                contractAddresses,
                contractsChainId,
                startTimestamp: formattedStartTimestamp,
                durationDays: formattedDurationDays,
                extraData
            }
        };
    }; //# sourceMappingURL=keypair.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/MockFhevmInstance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockFhevmInstance",
    ()=>MockFhevmInstance
]);
/*
    WARNING : Never import the "hardhat" package!
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$decryptUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/relayer/decryptUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$publicDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/relayer/publicDecrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$userDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/relayer/userDecrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$sdk$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/sdk/keypair.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$MockRelayerEncryptedInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/MockRelayerEncryptedInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/InputVerifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/KMSVerifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/MockRelayer.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MockFhevmInstance_relayerProvider, _MockFhevmInstance_readonlyEthersProvider, _MockFhevmInstance_chainId, _MockFhevmInstance_gatewayChainId, _MockFhevmInstance_verifyingContractAddressInputVerification, _MockFhevmInstance_verifyingContractAddressDecryption, _MockFhevmInstance_contractsChainId, _MockFhevmInstance_aclContractAddress, _MockFhevmInstance_kmsVerifier, _MockFhevmInstance_inputVerifier, _MockFhevmInstance_fhevmSdkCreateEIP712ForDecryptionFunc;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class MockFhevmInstance {
    get chainId() {
        return __classPrivateFieldGet(this, _MockFhevmInstance_chainId, "f");
    }
    static async create(relayerProvider, readonlyEthersProvider, config) {
        const kmsVerifier = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KMSVerifier"].create(readonlyEthersProvider, config.kmsContractAddress);
        const inputVerifier = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputVerifier"].create(readonlyEthersProvider, config.inputVerifierContractAddress);
        const instance = new MockFhevmInstance(config, {
            relayerProvider,
            readonlyEthersProvider,
            inputVerifier,
            kmsVerifier
        });
        return instance;
    }
    static createEIP712(publicKey, contractAddresses, startTimestamp, durationDays, verifyingContractAddressDecryption, contractsChainId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddressArray"])(contractAddresses, "contractAddresses");
        const eip712Func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$sdk$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEIP712"])(verifyingContractAddressDecryption, contractsChainId);
        const eip712 = eip712Func(publicKey, contractAddresses, startTimestamp, durationDays);
        //Debug Make sure we are in sync with KMSVerifier.sol
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712.domain.version === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.domain.version.toString());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712.domain.name === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.domain.name);
        return eip712;
    }
    // Create EIP712 for decryption
    createEIP712(publicKey, contractAddresses, startTimestamp, durationDays) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddressArray"])(contractAddresses, "contractAddresses");
        const eip712 = __classPrivateFieldGet(this, _MockFhevmInstance_fhevmSdkCreateEIP712ForDecryptionFunc, "f").call(this, publicKey, contractAddresses, startTimestamp, durationDays);
        //Debug Make sure we are in sync with KMSVerifier.sol
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(BigInt(__classPrivateFieldGet(this, _MockFhevmInstance_gatewayChainId, "f")) === __classPrivateFieldGet(this, _MockFhevmInstance_kmsVerifier, "f").eip712Domain.chainId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712.domain.verifyingContract === __classPrivateFieldGet(this, _MockFhevmInstance_kmsVerifier, "f").eip712Domain.verifyingContract);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712.domain.version === __classPrivateFieldGet(this, _MockFhevmInstance_kmsVerifier, "f").eip712Domain.version);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712.domain.name === __classPrivateFieldGet(this, _MockFhevmInstance_kmsVerifier, "f").eip712Domain.name);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(BigInt(eip712.domain.chainId) === BigInt(__classPrivateFieldGet(this, _MockFhevmInstance_contractsChainId, "f")));
        return eip712;
    }
    createEncryptedInput(contractAddress, userAddress) {
        //Debug Make sure we are in sync with InputVerifier.sol
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockFhevmInstance_verifyingContractAddressInputVerification, "f") === __classPrivateFieldGet(this, _MockFhevmInstance_inputVerifier, "f").eip712Domain.verifyingContract);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(BigInt(__classPrivateFieldGet(this, _MockFhevmInstance_gatewayChainId, "f")) === __classPrivateFieldGet(this, _MockFhevmInstance_inputVerifier, "f").eip712Domain.chainId);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$MockRelayerEncryptedInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MockRelayerEncryptedInput"](__classPrivateFieldGet(this, _MockFhevmInstance_relayerProvider, "f"), __classPrivateFieldGet(this, _MockFhevmInstance_chainId, "f"), contractAddress, userAddress, __classPrivateFieldGet(this, _MockFhevmInstance_aclContractAddress, "f"), __classPrivateFieldGet(this, _MockFhevmInstance_inputVerifier, "f"));
    }
    generateKeypair() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$sdk$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateKeypair"])();
    }
    getPublicKey() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Not supported in mock mode");
    }
    getPublicParams(_bits) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Not supported in mock mode");
    }
    async publicDecrypt(handles) {
        const extraData = "0x00";
        // Intercept future type change...
        for(let i = 0; i < handles.length; ++i){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof handles[i] === "string" || handles[i] instanceof Uint8Array, "handle is not a string or a Uint8Array");
        }
        // Casting handles if string
        const relayerHandles = handles.map((h)=>typeof h === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHexString"])(h)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])(h));
        // relayer-sdk
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$decryptUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkEncryptedBits"])(relayerHandles);
        await MockFhevmInstance.verifyPublicACLPermissions(__classPrivateFieldGet(this, _MockFhevmInstance_readonlyEthersProvider, "f"), __classPrivateFieldGet(this, _MockFhevmInstance_aclContractAddress, "f"), relayerHandles);
        // relayer-sdk
        const payloadForRequest = {
            ciphertextHandles: relayerHandles,
            extraData
        };
        // Return a json object basically following the @zama-fhe/relayer-sdk format
        const json = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestRelayerV1PublicDecrypt"](__classPrivateFieldGet(this, _MockFhevmInstance_relayerProvider, "f"), payloadForRequest);
        const result = json.response[0];
        // Add "0x" prefix if needed
        const decryptedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensure0x"])(result.decrypted_value);
        const signatures = result.signatures.map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensure0x"]);
        // verify signatures on decryption:
        const domain = {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.domain.name,
            version: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.domain.version,
            chainId: __classPrivateFieldGet(this, _MockFhevmInstance_gatewayChainId, "f"),
            verifyingContract: __classPrivateFieldGet(this, _MockFhevmInstance_verifyingContractAddressDecryption, "f")
        };
        const types = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.types;
        // The `signedExtraData` variable is following the @zama-fhe/relayer-sdk implementation
        // TODO: in relayer-sdk, signedExtraData === "0x". However, here, we use "0x00".
        const signedExtraData = "0x00";
        const recoveredAddresses = signatures.map((signature)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(signature.startsWith("0x"));
            const recoveredAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].verifyTypedData(domain, types, {
                ctHandles: handles,
                decryptedResult,
                extraData: signedExtraData
            }, signature);
            return recoveredAddress;
        });
        const thresholdReached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThresholdReached"])(__classPrivateFieldGet(this, _MockFhevmInstance_kmsVerifier, "f").getKmsSignersAddresses(), recoveredAddresses, __classPrivateFieldGet(this, _MockFhevmInstance_kmsVerifier, "f").getThreshold(), "KMS");
        if (!thresholdReached) {
            throw Error("KMS signers threshold is not reached");
        }
        const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$publicDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserializeDecryptedResult"])(relayerHandles, decryptedResult);
        return results;
    }
    async userDecrypt(handles, _privateKey, publicKey, signature, contractAddresses, userAddress, startTimestamp, durationDays) {
        const extraData = "0x00";
        // Intercept future type change...
        for(let i = 0; i < handles.length; ++i){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof handles[i].handle === "string" || handles[i].handle instanceof Uint8Array, "handle is not a string or a Uint8Array");
        }
        // Casting handles if string
        const relayerHandles = handles.map((h)=>({
                handle: typeof h.handle === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHexString"])(h.handle)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])(h.handle),
                contractAddress: h.contractAddress
            }));
        // relayer-sdk
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$decryptUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkEncryptedBits"])(relayerHandles.map((h)=>h.handle));
        // relayer-sdk
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$userDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDeadlineValidity"])(BigInt(startTimestamp), BigInt(durationDays));
        await MockFhevmInstance.verifyUserACLPermissions(__classPrivateFieldGet(this, _MockFhevmInstance_readonlyEthersProvider, "f"), __classPrivateFieldGet(this, _MockFhevmInstance_aclContractAddress, "f"), relayerHandles, userAddress);
        // relayer-sdk
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$userDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkMaxContractAddresses"])(contractAddresses);
        MockFhevmInstance.verifyHandleContractAddresses(relayerHandles, contractAddresses);
        // Redundant: the mock relayer already performs this check, so it could be removed
        await MockFhevmInstance.verifyUserDecryptSignature(publicKey, signature, contractAddresses, userAddress, startTimestamp, durationDays, __classPrivateFieldGet(this, _MockFhevmInstance_verifyingContractAddressDecryption, "f"), __classPrivateFieldGet(this, _MockFhevmInstance_contractsChainId, "f"));
        // relayer-sdk
        const payloadForRequest = {
            handleContractPairs: relayerHandles,
            requestValidity: {
                startTimestamp: startTimestamp.toString(),
                durationDays: durationDays.toString()
            },
            contractsChainId: __classPrivateFieldGet(this, _MockFhevmInstance_chainId, "f").toString(),
            contractAddresses: contractAddresses.map((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(c)),
            userAddress: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(userAddress),
            signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove0x"])(signature),
            publicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove0x"])(publicKey),
            extraData
        };
        // Return a json object basically following the @zama-fhe/relayer-sdk format
        const json = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestRelayerV1UserDecrypt"](__classPrivateFieldGet(this, _MockFhevmInstance_relayerProvider, "f"), payloadForRequest);
        const result = json.response[0];
        // The `decrypted_values` field is specific to the mock relayer.
        const clearTextHexList = result.payload.decrypted_values;
        const listBigIntDecryptions = clearTextHexList.map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBigInt);
        const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$userDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildUserDecryptedResult"])(relayerHandles.map((h)=>h.handle), listBigIntDecryptions);
        return results;
    }
    // Static function called by:
    // - MockFhevmInstance.userDecrypt()
    // - packages/hardhat-plugin/src/internal/provider/FhevmProviderExtender._handleFhevmRelayerV1UserDecrypt()
    static async verifyUserDecryptSignature(publicKey, signature, contractAddresses, userAddress, startTimestamp, durationDays, verifyingContractAddressDecryption, contractsChainId) {
        publicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensure0x"])(publicKey);
        signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensure0x"])(signature);
        const eip712 = MockFhevmInstance.createEIP712(publicKey, contractAddresses, startTimestamp, durationDays, verifyingContractAddressDecryption, contractsChainId);
        const types = {};
        types[eip712.primaryType] = eip712.types[eip712.primaryType];
        const signerAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].verifyTypedData(eip712.domain, types, eip712.message, signature);
        const normalizedSignerAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(signerAddress);
        const normalizedUserAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(userAddress);
        if (normalizedSignerAddress !== normalizedUserAddress) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid EIP-712 signature!");
        }
    }
    static async verifyPublicACLPermissions(readonlyEthersProvider, aclContractAddress, handles) {
        const aclABI = [
            "function isAllowedForDecryption(bytes32 handle) view returns (bool)"
        ];
        const acl = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(aclContractAddress, aclABI, readonlyEthersProvider);
        const verifications = handles.map(async (h)=>{
            const ctHandleHex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBigInt(h), 32);
            const allowed = await acl.isAllowedForDecryption(ctHandleHex);
            if (!allowed) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Handle ".concat(h, " is not allowed for public decryption!"));
            }
        });
        return Promise.all(verifications).catch((e)=>{
            throw e;
        });
    }
    // (Duplicated code) Should be imported from @zama-fhe/relayer-sdk
    static async verifyUserACLPermissions(readonlyEthersProvider, aclContractAddress, handles, userAddress) {
        const aclABI = [
            "function persistAllowed(bytes32 handle, address account) view returns (bool)"
        ];
        const acl = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(aclContractAddress, aclABI, readonlyEthersProvider);
        const verifications = handles.map(async (param)=>{
            let { handle, contractAddress } = param;
            const ctHandleHex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBigInt(handle), 32);
            const userAllowed = await acl.persistAllowed(ctHandleHex, userAddress);
            const contractAllowed = await acl.persistAllowed(ctHandleHex, contractAddress);
            if (!userAllowed) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("User ".concat(userAddress, " is not authorized to user decrypt handle ").concat(handle, "!"));
            }
            if (!contractAllowed) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("dapp contract ".concat(contractAddress, " is not authorized to user decrypt handle ").concat(handle, "!"));
            }
            if (userAddress === contractAddress) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("userAddress ".concat(userAddress, " should not be equal to contractAddress when requesting decryption!"));
            }
        });
        return Promise.all(verifications).catch((e)=>{
            throw e;
        });
    }
    static verifyHandleContractAddresses(handles, contractAddresses) {
        const set = new Set();
        // Build a list of unique allowed contact addresses.
        for(let i = 0; i < contractAddresses.length; ++i){
            const add = contractAddresses[i].toLowerCase();
            if (!set.has(add)) {
                set.add(add);
            }
        }
        // Check that every handle contract (in HandleContractPair) is actually listed in the contractAddresses argument.
        for(let i = 0; i < handles.length; ++i){
            if (!set.has(handles[i].contractAddress.toLowerCase())) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Contract address ".concat(handles[i].contractAddress, " associated to handle ").concat(handles[i].handle, " is not listed in the contractAddresses array argument."));
            }
        }
    }
    constructor(config, extra){
        _MockFhevmInstance_relayerProvider.set(this, void 0);
        _MockFhevmInstance_readonlyEthersProvider.set(this, void 0);
        _MockFhevmInstance_chainId.set(this, void 0); //provider's chainId
        _MockFhevmInstance_gatewayChainId.set(this, void 0);
        _MockFhevmInstance_verifyingContractAddressInputVerification.set(this, void 0);
        _MockFhevmInstance_verifyingContractAddressDecryption.set(this, void 0);
        _MockFhevmInstance_contractsChainId.set(this, void 0);
        _MockFhevmInstance_aclContractAddress.set(this, void 0);
        _MockFhevmInstance_kmsVerifier.set(this, void 0);
        _MockFhevmInstance_inputVerifier.set(this, void 0);
        _MockFhevmInstance_fhevmSdkCreateEIP712ForDecryptionFunc.set(this, void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(config.verifyingContractAddressInputVerification, "config.verifyingContractAddressInputVerification");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(config.verifyingContractAddressDecryption, "config.verifyingContractAddressDecryption");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsNumber"])(config.gatewayChainId, "config.gatewayChainId");
        __classPrivateFieldSet(this, _MockFhevmInstance_relayerProvider, extra.relayerProvider, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_readonlyEthersProvider, extra.readonlyEthersProvider, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_chainId, config.chainId, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_gatewayChainId, config.gatewayChainId, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_verifyingContractAddressInputVerification, config.verifyingContractAddressInputVerification, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_verifyingContractAddressDecryption, config.verifyingContractAddressDecryption, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_contractsChainId, config.chainId, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_aclContractAddress, config.aclContractAddress, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_kmsVerifier, extra.kmsVerifier, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_inputVerifier, extra.inputVerifier, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_fhevmSdkCreateEIP712ForDecryptionFunc, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$sdk$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEIP712"])(__classPrivateFieldGet(this, _MockFhevmInstance_verifyingContractAddressDecryption, "f"), __classPrivateFieldGet(this, _MockFhevmInstance_contractsChainId, "f")), "f");
    }
}
_MockFhevmInstance_relayerProvider = new WeakMap(), _MockFhevmInstance_readonlyEthersProvider = new WeakMap(), _MockFhevmInstance_chainId = new WeakMap(), _MockFhevmInstance_gatewayChainId = new WeakMap(), _MockFhevmInstance_verifyingContractAddressInputVerification = new WeakMap(), _MockFhevmInstance_verifyingContractAddressDecryption = new WeakMap(), _MockFhevmInstance_contractsChainId = new WeakMap(), _MockFhevmInstance_aclContractAddress = new WeakMap(), _MockFhevmInstance_kmsVerifier = new WeakMap(), _MockFhevmInstance_inputVerifier = new WeakMap(), _MockFhevmInstance_fhevmSdkCreateEIP712ForDecryptionFunc = new WeakMap(); //# sourceMappingURL=MockFhevmInstance.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/userDecrypt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userDecryptHandleBytes32",
    ()=>userDecryptHandleBytes32
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/keypair.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmHandle.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
async function userDecryptHandleBytes32(instance, handleContractPairs, user, options) {
    // Verify that contract addresses are well formed.
    _assertIsContractAddressesArray(handleContractPairs);
    // Resolve missing options (instance, keypair etc.)
    const userDecryptArgs = await _resolveUserDecryptOptions(instance, options);
    // extract chainId from instance (FhevmInstance is missing getChainId function)
    const chainId = _getFhevmInstanceChainId(instance);
    // Verify Fhevm handles
    _verifyFhevmHandleContractPairs(handleContractPairs, chainId);
    // Compute signature and list of contract addresses extracted and sorted from the handle/contract pairs
    const { signature, contractAddresses } = await _computeUserSignatureAndContractAddresses(instance, handleContractPairs, user, userDecryptArgs);
    // Prepare final arguments:
    // - user address
    // - array of CtHandleContractPair
    const userAddress = await user.getAddress();
    const handles = handleContractPairs.map((p)=>{
        return {
            handle: p.handleBytes32,
            contractAddress: p.contractAddress
        };
    });
    // Call FhevmInstance userDecrypt
    const decryptedHandles = await instance.userDecrypt(handles, userDecryptArgs.keypair.privateKey, userDecryptArgs.keypair.publicKey, signature, contractAddresses, userAddress, userDecryptArgs.startTimestamp, userDecryptArgs.durationDays);
    return decryptedHandles;
}
/**
 * - Creates a new FhevmInstance if needed.
 * - Generates a new FhevmKeypair or checks a given FhevmKeypair passed as argument.
 * - Generates a new FhevmUserDecryptValidity object or checks a given FhevmUserDecryptValidity passed as argument.
 */ async function _resolveUserDecryptOptions(instance, options) {
    var _options_validity, _options_validity1;
    let keypair;
    if ((options === null || options === void 0 ? void 0 : options.keypair) !== undefined) {
        keypair = {
            ...options.keypair
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyKeypair"])(keypair);
    } else {
        keypair = instance.generateKeypair();
    }
    const startTimestamp = (options === null || options === void 0 ? void 0 : (_options_validity = options.validity) === null || _options_validity === void 0 ? void 0 : _options_validity.startTimestamp) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampNow"])();
    const durationDays = (options === null || options === void 0 ? void 0 : (_options_validity1 = options.validity) === null || _options_validity1 === void 0 ? void 0 : _options_validity1.durationDays) || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DEFAULT_DURATION_DAYS;
    const startTimestampNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUIntNumber"])(startTimestamp, "startTimeStamp");
    const durationDaysNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUIntNumber"])(durationDays, "durationDays");
    return {
        keypair,
        startTimestamp: startTimestampNumber,
        durationDays: durationDaysNumber
    };
}
async function _computeUserSignatureAndContractAddresses(instance, contractAddresses, user, userDecryptArgs) {
    if (contractAddresses.length === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Empty list of contract addresses.");
    }
    // We use a deterministic method for convenience. (in case we need to rebuild the signature).
    const contractAddressesSortUnique = _buildDeterministicContractAddressesList(contractAddresses);
    if (contractAddressesSortUnique.length === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Empty list of valid contract addresses.");
    }
    const eip712 = instance.createEIP712(userDecryptArgs.keypair.publicKey, contractAddressesSortUnique, userDecryptArgs.startTimestamp, userDecryptArgs.durationDays);
    const signature = await user.signTypedData(eip712.domain, {
        UserDecryptRequestVerification: eip712.types.UserDecryptRequestVerification
    }, eip712.message);
    return {
        signature,
        contractAddresses: contractAddressesSortUnique
    };
}
function _getFhevmInstanceChainId(instance) {
    const dummyEIP712 = instance.createEIP712("", [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress
    ], 0, 0);
    return dummyEIP712.message.contractsChainId;
}
function _buildDeterministicContractAddressesList(contractAddresses) {
    const set = new Set();
    // Build a list of unique allowed contact addresses.
    for(let i = 0; i < contractAddresses.length; ++i){
        const ca = contractAddresses[i];
        let contractAddress;
        if (typeof ca === "string") {
            contractAddress = ca;
        } else {
            contractAddress = ca.contractAddress;
        }
        const add = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(contractAddress);
        if (!set.has(add)) {
            set.add(add);
        }
    }
    // Sort by alphabetical order, user lowercase comparison
    return [
        ...set
    ].sort((a, b)=>{
        const addrA = a.toLowerCase(); // ignore upper and lowercase
        const addrB = b.toLowerCase(); // ignore upper and lowercase
        if (addrA < addrB) {
            return -1;
        }
        if (addrA > addrB) {
            return 1;
        }
        return 0;
    });
}
function _assertIsContractAddressesArray(contractAddresses) {
    if (contractAddresses.length === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Empty list of contract addresses.");
    }
    for(let i = 0; i < contractAddresses.length; ++i){
        const ca = contractAddresses[i];
        let contractAddress;
        if (typeof ca === "string") {
            contractAddress = ca;
        } else {
            contractAddress = ca.contractAddress;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(contractAddress, "contractAddress");
    }
}
function _verifyFhevmHandleContractPairs(handleContractPairs, chainId) {
    if (handleContractPairs.length === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Empty list of handle/contract pairs.");
    }
    for(let i = 0; i < handleContractPairs.length; ++i){
        const pair = handleContractPairs[i];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].verify(pair.handleBytes32, {
            ...pair.fhevmType !== undefined && {
                fhevmType: pair.fhevmType
            },
            ...chainId !== undefined && {
                chainId: chainId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(pair.contractAddress, "contractAddress");
    }
} //# sourceMappingURL=userDecrypt.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/storage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeStorageLocation",
    ()=>computeStorageLocation,
    "getAddressesFromStorage",
    ()=>getAddressesFromStorage,
    "getInitializableStorage",
    ()=>getInitializableStorage,
    "getStorageAt",
    ()=>getStorageAt,
    "setInitializableStorage",
    ()=>setInitializableStorage,
    "setOwnableStorage",
    ()=>setOwnableStorage,
    "setStorageAt",
    ()=>setStorageAt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/provider.js [app-client] (ecmascript)");
;
;
;
;
;
function computeStorageLocation(storageName) {
    const enc = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].AbiCoder.defaultAbiCoder().encode([
        "uint256"
    ], [
        BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toUtf8Bytes(storageName))) - 1n
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].keccak256(enc)) & 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00n, 32);
}
async function getStorageAt(provider, address, index) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(address);
    const indexParam = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(index, 32);
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(provider, "eth_getStorageAt", [
        address,
        indexParam,
        "latest"
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32String"])(data);
    return data;
}
async function setStorageAt(provider, methodName, address, index, valueBytes32) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(address);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32String"])(valueBytes32);
    if (methodName !== "hardhat_setStorageAt") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Only hardhat_setStorageAt is supported. Got ".concat(methodName, " instead."));
    }
    const indexParam = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(index, 32);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(provider, methodName, [
        address,
        indexParam,
        valueBytes32
    ]);
}
async function getAddressesFromStorage(provider, contractAddress, storageLocationBytes32, numAddresses) {
    const addresses = [];
    for(let i = 0; i < numAddresses; ++i){
        const addr = await getStorageAt(provider, contractAddress, BigInt(storageLocationBytes32) + BigInt(i));
        addresses.push(addr);
    }
    const errorMsg = "The contract at address ".concat(contractAddress, " has not been initialized properly.");
    for(let i = 0; i < numAddresses; ++i){
        const addr = addresses[i];
        if (typeof addr !== "string" || !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isBytesLike(addr) || addr.length !== 66) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"](errorMsg);
        }
        const hex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(BigInt(addr), 20);
        try {
            addresses[i] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(hex);
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"](errorMsg);
        }
    }
    return addresses;
}
async function getInitializableStorage(provider, contractAddress) {
    const storageLocationBytes32 = computeStorageLocation("openzeppelin.storage.Initializable");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(storageLocationBytes32 === "0xf0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00", "Wrong 'openzeppelin.storage.Initializable' storage location");
    // One single 32 bytes slot with data packed in reverse order
    // 0x0000000000000000000000000000000000000000000000_01_0000000000000005
    //                                                 bool      uint64
    let data = await getStorageAt(provider, contractAddress, BigInt(storageLocationBytes32) + BigInt(0));
    data = data.replace(/^0x/, "").padStart(64, "0");
    // _initialized (uint64): first 8 bytes
    const initializedHex = "0x" + data.slice(-16); // 8 bytes = 16 hex chars
    const initialized = BigInt(initializedHex);
    // _initializing (bool): next byte (9th byte)
    const initializingByte = parseInt(data.slice(-18, -16), 16);
    const initializing = initializingByte !== 0;
    return {
        initialized,
        initializing
    };
}
async function setInitializableStorage(provider, contractAddress, value) {
    //
    // @openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol
    // struct InitializableStorage {
    //     /**
    //      * @dev Indicates that the contract has been initialized.
    //      */
    //     uint64 _initialized;
    //     /**
    //      * @dev Indicates that the contract is in the process of being initialized.
    //      */
    //     bool _initializing;
    // }
    //
    // // keccak256(abi.encode(uint256(keccak256("openzeppelin.storage.Initializable")) - 1)) & ~bytes32(uint256(0xff))
    // bytes32 private constant INITIALIZABLE_STORAGE = 0xf0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00;
    //
    const storageLocationBytes32 = computeStorageLocation("openzeppelin.storage.Initializable");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(storageLocationBytes32 === "0xf0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00", "Wrong 'openzeppelin.storage.Initializable' storage location");
    // Encode uint64 _initialized
    const initializedBytes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(value.initialized, 8); // 8 bytes
    // Encode bool _initializing (1 byte)
    const initializingByte = value.initializing ? "0x01" : "0x00";
    const packedHex = initializingByte + initializedBytes.slice(2); // drop '0x' from bool byte
    const paddedSlotValue = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(packedHex, 32); // full 32-byte slot
    await setStorageAt(provider, "hardhat_setStorageAt", contractAddress, BigInt(storageLocationBytes32) + BigInt(0), paddedSlotValue);
}
async function setOwnableStorage(provider, contractAddress, ownerAddress) {
    //
    // abstract contract OwnableUpgradeable is Initializable, ContextUpgradeable {
    //   /// @custom:storage-location erc7201:openzeppelin.storage.Ownable
    //   struct OwnableStorage {
    //       address _owner;
    //   }
    //   ...
    // }
    //
    // // keccak256(abi.encode(uint256(keccak256("openzeppelin.storage.Ownable")) - 1)) & ~bytes32(uint256(0xff))
    // bytes32 private constant OwnableStorageLocation = 0x9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300;
    //
    const storageLocationBytes32 = computeStorageLocation("openzeppelin.storage.Ownable");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(storageLocationBytes32 === "0x9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300", "Wrong 'openzeppelin.storage.Ownable' storage location");
    const paddedSlotValue = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(ownerAddress, 32); // full 32-byte slot
    await setStorageAt(provider, "hardhat_setStorageAt", contractAddress, BigInt(storageLocationBytes32) + BigInt(0), paddedSlotValue);
} //# sourceMappingURL=storage.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/CoprocessorConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCoprocessorConfig",
    ()=>getCoprocessorConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
;
;
async function getCoprocessorConfig(provider, contractAddress) {
    const coprocessorConfigStorageLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeStorageLocation"])("confidential.storage.config");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(coprocessorConfigStorageLocation === "0x9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e4649700");
    /*
      See: @fhevm/solidity/config/ZamaConfig.sol and @fhevm/solidity/lib/Impl.sol
      
      struct CoprocessorConfig {
        address ACLAddress;
        address CoprocessorAddress;
        address DecryptionOracleAddress;
        address KMSVerifierAddress;
      }
    */ const addresses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddressesFromStorage"])(provider, contractAddress, coprocessorConfigStorageLocation, 4 /* number of addresses in the struct */ );
    return {
        ACLAddress: addresses[0],
        CoprocessorAddress: addresses[1],
        DecryptionOracleAddress: addresses[2],
        KMSVerifierAddress: addresses[3]
    };
} //# sourceMappingURL=CoprocessorConfig.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/_version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = "0.1.0"; //# sourceMappingURL=_version.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmDBMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$db$2f$FhevmDBMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmDBMap"],
    "FhevmHandle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"],
    "FhevmHandleCoder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandleCoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandleCoder"],
    "FhevmMockProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$FhevmMockProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmMockProvider"],
    "FhevmMockProviderType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$FhevmMockProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmMockProviderType"],
    "FhevmType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"],
    "MockCoprocessor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$MockCoprocessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MockCoprocessor"],
    "MockDecryptionOracle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$MockDecryptionOracle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MockDecryptionOracle"],
    "MockFhevmInstance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$MockFhevmInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MockFhevmInstance"],
    "MockRelayerEncryptedInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$MockRelayerEncryptedInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MockRelayerEncryptedInput"],
    "assertIsEIP712Domain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsEIP712Domain"],
    "connectedChainId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectedChainId"],
    "constants",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "contracts",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "getCoprocessorConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$CoprocessorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoprocessorConfig"],
    "getFhevmTypeInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFhevmTypeInfo"],
    "getInitializableStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializableStorage"],
    "isAnvilProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$anvil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnvilProvider"],
    "isFhevmEaddress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmEaddress"],
    "isFhevmEbool",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmEbool"],
    "isFhevmEbytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmEbytes"],
    "isFhevmEuint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmEuint"],
    "isHardhatProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$hardhat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatProvider"],
    "minimalProviderSend",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"],
    "parseCoprocessorEventsFromLogs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCoprocessorEventsFromLogs"],
    "parseDecryptionRequestEventsFromLogs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDecryptionRequestEventsFromLogs"],
    "relayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "setInitializableStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setInitializableStorage"],
    "setOwnableStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOwnableStorage"],
    "tryParseFhevmType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tryParseFhevmType"],
    "userDecryptHandleBytes32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$userDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userDecryptHandleBytes32"],
    "utils",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$_version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$db$2f$FhevmDBMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/db/FhevmDBMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandleCoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmHandleCoder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmHandle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/coprocessor/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$FhevmMockProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/FhevmMockProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$coprocessor$2f$MockCoprocessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/coprocessor/MockCoprocessor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$decryptionOracle$2f$MockDecryptionOracle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/decryptionOracle/MockDecryptionOracle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$MockRelayerEncryptedInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/MockRelayerEncryptedInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$MockFhevmInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/MockFhevmInstance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$userDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/userDecrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$hardhat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/hardhat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$anvil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/anvil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$CoprocessorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/CoprocessorConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$_version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/_version.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=9e883_%40fhevm_mock-utils__esm_e9ebe752._.js.map