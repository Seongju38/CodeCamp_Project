import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: 700;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 400px;
  padding-bottom: 21px;
`;

export const WriterInput = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const ErrorMsg = styled.div`
  font-size: 12px;
  color: red;
  text-align: center;
`;

export const SubjectInput = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const ContentInput = styled.textarea`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding: 14px;
`;

export const ZipCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ZipCodeInput = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const ZipCodeButton = styled.button`
  width: 124px;
  height: 52px;
  padding: 14px 16px;
  background: black;
  color: white;
  margin-left: 16px;
  cursor: pointer;
`;

export const AddressInput = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-top: 16px;
  padding-left: 16px;
`;

export const YoutubeInput = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const ImageUploadButton = styled.button`
  width: 78px;
  height: 78px;
  background: #dbdbdb;
  color: #4f4f4f;
  font-size: 12px;
  font-weight: 500;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioBoxWrapper = styled.div`
  display: flex;
`;

export const RadioButton = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-right: 20px;
  margin-left: 8px;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  background: #ffd600;
  margin: 0 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
