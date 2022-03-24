export type QTQuestionModel = {
  ridSurveyItem: string;
  itemNo: number;
  itemTitle: string;
  fieldTypeCode: string;
  imagePath?: string;
  imageContents?: string;
  itemAttrList: string[];
  isOptional: string;
};

export type QTQuestionProps = {
  ridSurveySection: string;
  questionModel: QTQuestionModel;
};

export type RadioProp = {
  questionModel: QTQuestionModel; // api
  handler: (radioValue: string) => void; // 라디오나 체크박스 이벤트 핸들러
}

export type TextAreaProp = {
  questionModel: QTQuestionModel;
  disabled: boolean;
}