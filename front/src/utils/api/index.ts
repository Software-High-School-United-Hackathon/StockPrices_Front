import instance from "../axios";
import { ICreateTest, IPostAnswer } from "../models/request";
import { IGetResult, IGetTest } from "../models/response";

export const PostTest = async (body: ICreateTest) => {
  try {
    return await instance.post(`/exam`, body);
  } catch (error) {
    throw error;
  }
};

export const GetResult = async (): Promise<IGetResult> => {
  try {
    return await instance.get(`/exam/result`);
  } catch (error) {
    throw error;
  }
};

export const GetQuestion = async (): Promise<IGetTest> => {
  try {
    return await instance.get(`/question`);
  } catch (error) {
    throw error;
  }
};

export const PostAnswer = async (body: IPostAnswer) => {
  try {
    return await instance.post(`/question`, body);
  } catch (error) {
    throw error;
  }
};
