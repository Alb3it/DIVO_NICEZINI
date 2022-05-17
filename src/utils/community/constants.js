export const catList = [ "information", "qna", "general", "bug", "notice"];
export const proList = [ "myContent", "myComment", "scrap", "liked"];

export const NotStaffSelectOptions = [
  { value: 'information', label: '정보' },
  { value: 'qna', label: '질문' },
  { value: 'general', label: '자유' },
  { value: 'bug', label: '오류' },
];

export const StaffSelectOptions = [
  { value: 'information', label: '정보' },
  { value: 'qna', label: '질문' },
  { value: 'general', label: '자유' },
  { value: 'bug', label: '오류' },
  { value: 'notice', label: '공지사항' },
];

export const SelectStyles = {
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      background: isFocused
      ? "#f4f4f4"
      : isSelected
      ? "#eeeeee"
      : "#ffffff",
      color: "#1d1d1f",
      opacity: 0.8,
      padding: 10,
      fontSize: "14px",
      border: "none",
      outline: "none"
    }),
    control: (provided, {isFocused}) => ({
      ...provided,
      background: "#efefef",
      border: "none",
      outline: isFocused
      ? "#555555 solid 1.5px"
      : "none",
      transition: "outline 0.1s"
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "14px",
      padding: 4,
      border: "none",
      outline: "none",
      focus: {outline: "black solid 1px"},
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: "14px",
      padding: 4,
      color: "#1d1d1f",
      border: "none",
      outline: "none",
      
    }),
};