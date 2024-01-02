import {
  Wrapper,
  Title,
  WriterWrapper,
  InputWrapper,
  Label,
  WriterInput,
  TitleInput,
  ContentInput,
  ZipCodeWrapper,
  ZipCodeInput,
  ZipCodeButton,
  AddressInput,
  YoutubeInput,
  ImageWrapper,
  ImageUploadButton,
  OptionWrapper,
  RadioBoxWrapper,
  RadioButton,
  RadioLabel,
  SubmitButton,
} from "../../../styles/boards-new";

export default function () {
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <WriterInput type="text" placeholder="이름을 적어주세요." />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <WriterInput type="password" placeholder="비밀번호를 입력해주세요." />
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <TitleInput type="text" placeholder="제목을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <ContentInput type="text" placeholder="내용을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipCodeWrapper>
          <ZipCodeInput placeholder="07250" />
          <ZipCodeButton>우편번호 검색</ZipCodeButton>
        </ZipCodeWrapper>
        <AddressInput />
        <AddressInput />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <YoutubeInput placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진 첨부</Label>
        <ImageUploadButton>
          +<br></br>Upload
        </ImageUploadButton>
        <ImageUploadButton>
          +<br></br>Upload
        </ImageUploadButton>
        <ImageUploadButton>
          +<br></br>Upload
        </ImageUploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인 설정</Label>
        <RadioBoxWrapper>
          <RadioButton type="radio" id="youtube" name="radio-box" />
          <RadioLabel>유튜브</RadioLabel>
          <RadioButton type="radio" id="photo" name="radio-box" />
          <RadioLabel>사진</RadioLabel>
        </RadioBoxWrapper>
      </OptionWrapper>
      <SubmitButton>등록하기</SubmitButton>
    </Wrapper>
  );
}
