// package: bc
// file: bc.proto

import * as jspb from "google-protobuf";
import * as core_pb from "./core_pb";

export class GetLatestBlocksResponse extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<core_pb.Block>;
  setBlocksList(value: Array<core_pb.Block>): void;
  addBlocks(value?: core_pb.Block, index?: number): core_pb.Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestBlocksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestBlocksResponse): GetLatestBlocksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestBlocksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestBlocksResponse;
  static deserializeBinaryFromReader(message: GetLatestBlocksResponse, reader: jspb.BinaryReader): GetLatestBlocksResponse;
}

export namespace GetLatestBlocksResponse {
  export type AsObject = {
    blocksList: Array<core_pb.Block.AsObject>,
  }
}

export class HelpResponse extends jspb.Message {
  getHelpText(): string;
  setHelpText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelpResponse): HelpResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelpResponse;
  static deserializeBinaryFromReader(message: HelpResponse, reader: jspb.BinaryReader): HelpResponse;
}

export namespace HelpResponse {
  export type AsObject = {
    helpText: string,
  }
}

export class StatsResponse extends jspb.Message {
  getCalls(): number;
  setCalls(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatsResponse): StatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsResponse;
  static deserializeBinaryFromReader(message: StatsResponse, reader: jspb.BinaryReader): StatsResponse;
}

export namespace StatsResponse {
  export type AsObject = {
    calls: number,
  }
}

export class RpcTransaction extends jspb.Message {
  getFromAddr(): string;
  setFromAddr(value: string): void;

  getToAddr(): string;
  setToAddr(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getTxFee(): string;
  setTxFee(value: string): void;

  getPrivateKeyHex(): string;
  setPrivateKeyHex(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RpcTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: RpcTransaction): RpcTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RpcTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RpcTransaction;
  static deserializeBinaryFromReader(message: RpcTransaction, reader: jspb.BinaryReader): RpcTransaction;
}

export namespace RpcTransaction {
  export type AsObject = {
    fromAddr: string,
    toAddr: string,
    amount: string,
    txFee: string,
    privateKeyHex: string,
  }
}

export class RpcTransactionResponse extends jspb.Message {
  getStatus(): RpcTransactionResponseStatusMap[keyof RpcTransactionResponseStatusMap];
  setStatus(value: RpcTransactionResponseStatusMap[keyof RpcTransactionResponseStatusMap]): void;

  getTxHash(): string;
  setTxHash(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RpcTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RpcTransactionResponse): RpcTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RpcTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RpcTransactionResponse;
  static deserializeBinaryFromReader(message: RpcTransactionResponse, reader: jspb.BinaryReader): RpcTransactionResponse;
}

export namespace RpcTransactionResponse {
  export type AsObject = {
    status: RpcTransactionResponseStatusMap[keyof RpcTransactionResponseStatusMap],
    txHash: string,
    error: string,
  }
}

export class GetSpendableCollateralRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpendableCollateralRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpendableCollateralRequest): GetSpendableCollateralRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpendableCollateralRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpendableCollateralRequest;
  static deserializeBinaryFromReader(message: GetSpendableCollateralRequest, reader: jspb.BinaryReader): GetSpendableCollateralRequest;
}

export namespace GetSpendableCollateralRequest {
  export type AsObject = {
    address: string,
  }
}

export class GetSpendableCollateralResponse extends jspb.Message {
  clearOutpointsList(): void;
  getOutpointsList(): Array<core_pb.OutPoint>;
  setOutpointsList(value: Array<core_pb.OutPoint>): void;
  addOutpoints(value?: core_pb.OutPoint, index?: number): core_pb.OutPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpendableCollateralResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpendableCollateralResponse): GetSpendableCollateralResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpendableCollateralResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpendableCollateralResponse;
  static deserializeBinaryFromReader(message: GetSpendableCollateralResponse, reader: jspb.BinaryReader): GetSpendableCollateralResponse;
}

export namespace GetSpendableCollateralResponse {
  export type AsObject = {
    outpointsList: Array<core_pb.OutPoint.AsObject>,
  }
}

export class GetBalanceRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalanceRequest): GetBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceRequest;
  static deserializeBinaryFromReader(message: GetBalanceRequest, reader: jspb.BinaryReader): GetBalanceRequest;
}

export namespace GetBalanceRequest {
  export type AsObject = {
    address: string,
  }
}

export class GetBalanceResponse extends jspb.Message {
  getConfirmed(): string;
  setConfirmed(value: string): void;

  getUnconfirmed(): string;
  setUnconfirmed(value: string): void;

  getCollateralized(): string;
  setCollateralized(value: string): void;

  getCollateralizedspendable(): string;
  setCollateralizedspendable(value: string): void;

  getUnit(): string;
  setUnit(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalanceResponse): GetBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceResponse;
  static deserializeBinaryFromReader(message: GetBalanceResponse, reader: jspb.BinaryReader): GetBalanceResponse;
}

export namespace GetBalanceResponse {
  export type AsObject = {
    confirmed: string,
    unconfirmed: string,
    collateralized: string,
    collateralizedspendable: string,
    unit: string,
  }
}

export class UnlockCollateralRequest extends jspb.Message {
  hasOutpoint(): boolean;
  clearOutpoint(): void;
  getOutpoint(): core_pb.OutPoint | undefined;
  setOutpoint(value?: core_pb.OutPoint): void;

  getBcAddress(): string;
  setBcAddress(value: string): void;

  getBcPrivateKeyHex(): string;
  setBcPrivateKeyHex(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockCollateralRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockCollateralRequest): UnlockCollateralRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlockCollateralRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockCollateralRequest;
  static deserializeBinaryFromReader(message: UnlockCollateralRequest, reader: jspb.BinaryReader): UnlockCollateralRequest;
}

export namespace UnlockCollateralRequest {
  export type AsObject = {
    outpoint?: core_pb.OutPoint.AsObject,
    bcAddress: string,
    bcPrivateKeyHex: string,
  }
}

export class MakerOrderInfo extends jspb.Message {
  getTradeHeight(): number;
  setTradeHeight(value: number): void;

  getDepositHeight(): number;
  setDepositHeight(value: number): void;

  getSettleHeight(): number;
  setSettleHeight(value: number): void;

  getPaysChainId(): string;
  setPaysChainId(value: string): void;

  getWantsChainId(): string;
  setWantsChainId(value: string): void;

  getWantsAddress(): string;
  setWantsAddress(value: string): void;

  getWantsUnit(): string;
  setWantsUnit(value: string): void;

  getPaysUnit(): string;
  setPaysUnit(value: string): void;

  getDoubleHashedBcAddress(): string;
  setDoubleHashedBcAddress(value: string): void;

  getCollateralizedNrg(): string;
  setCollateralizedNrg(value: string): void;

  getNrgUnit(): string;
  setNrgUnit(value: string): void;

  getTxHash(): string;
  setTxHash(value: string): void;

  getTxOutputIndex(): number;
  setTxOutputIndex(value: number): void;

  getIsSettled(): boolean;
  setIsSettled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MakerOrderInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MakerOrderInfo): MakerOrderInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MakerOrderInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MakerOrderInfo;
  static deserializeBinaryFromReader(message: MakerOrderInfo, reader: jspb.BinaryReader): MakerOrderInfo;
}

export namespace MakerOrderInfo {
  export type AsObject = {
    tradeHeight: number,
    depositHeight: number,
    settleHeight: number,
    paysChainId: string,
    wantsChainId: string,
    wantsAddress: string,
    wantsUnit: string,
    paysUnit: string,
    doubleHashedBcAddress: string,
    collateralizedNrg: string,
    nrgUnit: string,
    txHash: string,
    txOutputIndex: number,
    isSettled: boolean,
  }
}

export class TakerOrderInfo extends jspb.Message {
  getSendsAddress(): string;
  setSendsAddress(value: string): void;

  getWantsAddress(): string;
  setWantsAddress(value: string): void;

  getDoubleHashedBcAddress(): string;
  setDoubleHashedBcAddress(value: string): void;

  getIsSettled(): boolean;
  setIsSettled(value: boolean): void;

  getTxHash(): string;
  setTxHash(value: string): void;

  getTxOutputIndex(): number;
  setTxOutputIndex(value: number): void;

  getTotalCollateral(): string;
  setTotalCollateral(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakerOrderInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TakerOrderInfo): TakerOrderInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TakerOrderInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakerOrderInfo;
  static deserializeBinaryFromReader(message: TakerOrderInfo, reader: jspb.BinaryReader): TakerOrderInfo;
}

export namespace TakerOrderInfo {
  export type AsObject = {
    sendsAddress: string,
    wantsAddress: string,
    doubleHashedBcAddress: string,
    isSettled: boolean,
    txHash: string,
    txOutputIndex: number,
    totalCollateral: string,
  }
}

export class MatchedOpenOrder extends jspb.Message {
  hasMaker(): boolean;
  clearMaker(): void;
  getMaker(): MakerOrderInfo | undefined;
  setMaker(value?: MakerOrderInfo): void;

  hasTaker(): boolean;
  clearTaker(): void;
  getTaker(): TakerOrderInfo | undefined;
  setTaker(value?: TakerOrderInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchedOpenOrder.AsObject;
  static toObject(includeInstance: boolean, msg: MatchedOpenOrder): MatchedOpenOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchedOpenOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchedOpenOrder;
  static deserializeBinaryFromReader(message: MatchedOpenOrder, reader: jspb.BinaryReader): MatchedOpenOrder;
}

export namespace MatchedOpenOrder {
  export type AsObject = {
    maker?: MakerOrderInfo.AsObject,
    taker?: TakerOrderInfo.AsObject,
  }
}

export class GetOpenOrdersResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<MakerOrderInfo>;
  setOrdersList(value: Array<MakerOrderInfo>): void;
  addOrders(value?: MakerOrderInfo, index?: number): MakerOrderInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOpenOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOpenOrdersResponse): GetOpenOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOpenOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOpenOrdersResponse;
  static deserializeBinaryFromReader(message: GetOpenOrdersResponse, reader: jspb.BinaryReader): GetOpenOrdersResponse;
}

export namespace GetOpenOrdersResponse {
  export type AsObject = {
    ordersList: Array<MakerOrderInfo.AsObject>,
  }
}

export class GetMatchedOrdersRequest extends jspb.Message {
  getOnlySettled(): boolean;
  setOnlySettled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMatchedOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMatchedOrdersRequest): GetMatchedOrdersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMatchedOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMatchedOrdersRequest;
  static deserializeBinaryFromReader(message: GetMatchedOrdersRequest, reader: jspb.BinaryReader): GetMatchedOrdersRequest;
}

export namespace GetMatchedOrdersRequest {
  export type AsObject = {
    onlySettled: boolean,
  }
}

export class GetMatchedOrdersResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<MatchedOpenOrder>;
  setOrdersList(value: Array<MatchedOpenOrder>): void;
  addOrders(value?: MatchedOpenOrder, index?: number): MatchedOpenOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMatchedOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMatchedOrdersResponse): GetMatchedOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMatchedOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMatchedOrdersResponse;
  static deserializeBinaryFromReader(message: GetMatchedOrdersResponse, reader: jspb.BinaryReader): GetMatchedOrdersResponse;
}

export namespace GetMatchedOrdersResponse {
  export type AsObject = {
    ordersList: Array<MatchedOpenOrder.AsObject>,
  }
}

export class PlaceMakerOrderRequest extends jspb.Message {
  getShiftStartsAt(): number;
  setShiftStartsAt(value: number): void;

  getDepositEndsAt(): number;
  setDepositEndsAt(value: number): void;

  getSettleEndsAt(): number;
  setSettleEndsAt(value: number): void;

  getPaysWithChainId(): string;
  setPaysWithChainId(value: string): void;

  getWantsChainId(): string;
  setWantsChainId(value: string): void;

  getWantsChainAddress(): string;
  setWantsChainAddress(value: string): void;

  getWantsUnit(): string;
  setWantsUnit(value: string): void;

  getPaysUnit(): string;
  setPaysUnit(value: string): void;

  getBcAddress(): string;
  setBcAddress(value: string): void;

  getBcPrivateKeyHex(): string;
  setBcPrivateKeyHex(value: string): void;

  getCollateralizedNrg(): string;
  setCollateralizedNrg(value: string): void;

  getNrgUnit(): string;
  setNrgUnit(value: string): void;

  getTxFee(): string;
  setTxFee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaceMakerOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlaceMakerOrderRequest): PlaceMakerOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaceMakerOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaceMakerOrderRequest;
  static deserializeBinaryFromReader(message: PlaceMakerOrderRequest, reader: jspb.BinaryReader): PlaceMakerOrderRequest;
}

export namespace PlaceMakerOrderRequest {
  export type AsObject = {
    shiftStartsAt: number,
    depositEndsAt: number,
    settleEndsAt: number,
    paysWithChainId: string,
    wantsChainId: string,
    wantsChainAddress: string,
    wantsUnit: string,
    paysUnit: string,
    bcAddress: string,
    bcPrivateKeyHex: string,
    collateralizedNrg: string,
    nrgUnit: string,
    txFee: string,
  }
}

export class PlaceTakerOrderRequest extends jspb.Message {
  getWantsChainAddress(): string;
  setWantsChainAddress(value: string): void;

  getSendsChainAddress(): string;
  setSendsChainAddress(value: string): void;

  getMakerTxHash(): string;
  setMakerTxHash(value: string): void;

  getMakerTxOutputIndex(): number;
  setMakerTxOutputIndex(value: number): void;

  getBcAddress(): string;
  setBcAddress(value: string): void;

  getBcPrivateKeyHex(): string;
  setBcPrivateKeyHex(value: string): void;

  getCollateralizedNrg(): string;
  setCollateralizedNrg(value: string): void;

  getTxFee(): string;
  setTxFee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaceTakerOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlaceTakerOrderRequest): PlaceTakerOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaceTakerOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaceTakerOrderRequest;
  static deserializeBinaryFromReader(message: PlaceTakerOrderRequest, reader: jspb.BinaryReader): PlaceTakerOrderRequest;
}

export namespace PlaceTakerOrderRequest {
  export type AsObject = {
    wantsChainAddress: string,
    sendsChainAddress: string,
    makerTxHash: string,
    makerTxOutputIndex: number,
    bcAddress: string,
    bcPrivateKeyHex: string,
    collateralizedNrg: string,
    txFee: string,
  }
}

export class TakerOrder extends jspb.Message {
  getWantsChainAddress(): string;
  setWantsChainAddress(value: string): void;

  getSendsChainAddress(): string;
  setSendsChainAddress(value: string): void;

  getMakerTxHash(): string;
  setMakerTxHash(value: string): void;

  getMakerTxOutputIndex(): number;
  setMakerTxOutputIndex(value: number): void;

  getCollateralizedNrg(): string;
  setCollateralizedNrg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakerOrder.AsObject;
  static toObject(includeInstance: boolean, msg: TakerOrder): TakerOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TakerOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakerOrder;
  static deserializeBinaryFromReader(message: TakerOrder, reader: jspb.BinaryReader): TakerOrder;
}

export namespace TakerOrder {
  export type AsObject = {
    wantsChainAddress: string,
    sendsChainAddress: string,
    makerTxHash: string,
    makerTxOutputIndex: number,
    collateralizedNrg: string,
  }
}

export class PlaceTakerOrdersRequest extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<TakerOrder>;
  setOrdersList(value: Array<TakerOrder>): void;
  addOrders(value?: TakerOrder, index?: number): TakerOrder;

  getBcAddress(): string;
  setBcAddress(value: string): void;

  getBcPrivateKeyHex(): string;
  setBcPrivateKeyHex(value: string): void;

  getTxFee(): string;
  setTxFee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaceTakerOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlaceTakerOrdersRequest): PlaceTakerOrdersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaceTakerOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaceTakerOrdersRequest;
  static deserializeBinaryFromReader(message: PlaceTakerOrdersRequest, reader: jspb.BinaryReader): PlaceTakerOrdersRequest;
}

export namespace PlaceTakerOrdersRequest {
  export type AsObject = {
    ordersList: Array<TakerOrder.AsObject>,
    bcAddress: string,
    bcPrivateKeyHex: string,
    txFee: string,
  }
}

export class CalculateMakerFeeRequest extends jspb.Message {
  getShiftStartsAt(): number;
  setShiftStartsAt(value: number): void;

  getDepositEndsAt(): number;
  setDepositEndsAt(value: number): void;

  getSettleEndsAt(): number;
  setSettleEndsAt(value: number): void;

  getPaysWithChainId(): string;
  setPaysWithChainId(value: string): void;

  getPaysUnit(): string;
  setPaysUnit(value: string): void;

  getWantsChainId(): string;
  setWantsChainId(value: string): void;

  getWantsUnit(): string;
  setWantsUnit(value: string): void;

  getCollateralizedNrg(): string;
  setCollateralizedNrg(value: string): void;

  getNrgUnit(): string;
  setNrgUnit(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateMakerFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateMakerFeeRequest): CalculateMakerFeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalculateMakerFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateMakerFeeRequest;
  static deserializeBinaryFromReader(message: CalculateMakerFeeRequest, reader: jspb.BinaryReader): CalculateMakerFeeRequest;
}

export namespace CalculateMakerFeeRequest {
  export type AsObject = {
    shiftStartsAt: number,
    depositEndsAt: number,
    settleEndsAt: number,
    paysWithChainId: string,
    paysUnit: string,
    wantsChainId: string,
    wantsUnit: string,
    collateralizedNrg: string,
    nrgUnit: string,
  }
}

export class CalculateTakerFeeRequest extends jspb.Message {
  getMakerTxHash(): string;
  setMakerTxHash(value: string): void;

  getMakerTxOutputIndex(): number;
  setMakerTxOutputIndex(value: number): void;

  getCollateralizedNrg(): string;
  setCollateralizedNrg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateTakerFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateTakerFeeRequest): CalculateTakerFeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalculateTakerFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateTakerFeeRequest;
  static deserializeBinaryFromReader(message: CalculateTakerFeeRequest, reader: jspb.BinaryReader): CalculateTakerFeeRequest;
}

export namespace CalculateTakerFeeRequest {
  export type AsObject = {
    makerTxHash: string,
    makerTxOutputIndex: number,
    collateralizedNrg: string,
  }
}

export class FeeResponse extends jspb.Message {
  getFee(): string;
  setFee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FeeResponse): FeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeResponse;
  static deserializeBinaryFromReader(message: FeeResponse, reader: jspb.BinaryReader): FeeResponse;
}

export namespace FeeResponse {
  export type AsObject = {
    fee: string,
  }
}

export class GetBlake2blRequest extends jspb.Message {
  getToBeHashed(): string;
  setToBeHashed(value: string): void;

  getTimes(): number;
  setTimes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlake2blRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlake2blRequest): GetBlake2blRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlake2blRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlake2blRequest;
  static deserializeBinaryFromReader(message: GetBlake2blRequest, reader: jspb.BinaryReader): GetBlake2blRequest;
}

export namespace GetBlake2blRequest {
  export type AsObject = {
    toBeHashed: string,
    times: number,
  }
}

export class GetBlake2blResponse extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlake2blResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlake2blResponse): GetBlake2blResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlake2blResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlake2blResponse;
  static deserializeBinaryFromReader(message: GetBlake2blResponse, reader: jspb.BinaryReader): GetBlake2blResponse;
}

export namespace GetBlake2blResponse {
  export type AsObject = {
    hash: string,
  }
}

export class VanityConvertRequest extends jspb.Message {
  getVanity(): string;
  setVanity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanityConvertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VanityConvertRequest): VanityConvertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanityConvertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanityConvertRequest;
  static deserializeBinaryFromReader(message: VanityConvertRequest, reader: jspb.BinaryReader): VanityConvertRequest;
}

export namespace VanityConvertRequest {
  export type AsObject = {
    vanity: string,
  }
}

export class VanityConvertResponse extends jspb.Message {
  getBcAddress(): string;
  setBcAddress(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanityConvertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VanityConvertResponse): VanityConvertResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanityConvertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanityConvertResponse;
  static deserializeBinaryFromReader(message: VanityConvertResponse, reader: jspb.BinaryReader): VanityConvertResponse;
}

export namespace VanityConvertResponse {
  export type AsObject = {
    bcAddress: string,
    error: string,
  }
}

export interface RpcTransactionResponseStatusMap {
  SUCCESS: 0;
  FAILURE: 1;
}

export const RpcTransactionResponseStatus: RpcTransactionResponseStatusMap;

