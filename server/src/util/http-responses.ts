import { Response } from "express";
import {
  FORBIDDEN,
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  OK,
  ACCEPTED,
  MULTI_STATUS,
  UNAUTHORIZED,
  CREATED,
  NO_CONTENT,
} from "http-status-codes";

const ok = (res: Response, data?: any) => {
  return createResponse(res, OK, data);
};
const accepted = (res: Response, data?: any) => {
  return createResponse(res, ACCEPTED, data);
};

const multiStatus = (res: Response, data?: any) => {
  return createResponse(res, MULTI_STATUS, data);
};

const badRequest = (res: Response, data?: any) => {
  return createResponse(res, BAD_REQUEST, data);
};

const notFound = (res: Response, data?: any) => {
  return createResponse(res, NOT_FOUND, data);
};

const internalServerError = (res: Response, data?: any) => {
  return createResponse(res, INTERNAL_SERVER_ERROR, data);
};

const forbidden = (res: Response, data?: any) => {
  return createResponse(res, FORBIDDEN, data);
};

const unauthorized = (res: Response, data?: any) => {
  return createResponse(res, UNAUTHORIZED, data);
};

const created = (res: Response, data?: any) => {
  return createResponse(res, CREATED, data);
};

const noContent = (res: Response, data?: any) => {
  return createResponse(res, NO_CONTENT, data);
};

const buildJson = (data?: any) => {
  if (!data) return;
  if (typeof data === "string") return { message: data };
  return data;
};

const createResponse = (res: Response, code: number, data: string) => {
  const json = buildJson(data);
  if (!json) return res.status(code).end();
  return res.status(code).json(json).end();
};

const ResponseBuilder = {
  badRequest,
  ok,
  created,
  accepted,
  notFound,
  internalServerError,
  forbidden,
  multiStatus,
  unauthorized,
  noContent,
};

export { ResponseBuilder };
