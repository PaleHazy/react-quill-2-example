import {QUILL_FONT_SIZE_FORMAT,QUILL_CUSTOM_FONT_SIZE_INLINE_FORMAT } from './quillSetup'
const USER = "user";
const quillToolbarHandlers = {
  // handlers object will be merged with default handlers object
  //(this.) refers to the quill editor
  bold: function bold(value) {
    //hacked bold button helper to see what is going on 
    if (value) console.log("..bolding..");
    else console.log("..un-bolding..");
    console.log(this.quill.getContents())
    console.log(this.quill.getLength())
    console.log(this.quill.getText())
    console.log(this.quill.getSelection())
    console.log(this.quill.getFormat())
    // this.quill.format("bold", value, USER);
  },
  /**
   *
   * @param {string} val will be like center, right, justify
   */
  align: function align(val) {
    console.log(val)
    console.log(this.quill.getFormat())
    this.quill.format("align", val, USER);
  },
  size: function size(val) {
    const format = this.quill.getFormat();
    const range = this.quill.getSelection();
    console.log('rangr, ', range)
    console.log('old block format ', format[QUILL_FONT_SIZE_FORMAT])
    console.log('old inline format ', format[QUILL_CUSTOM_FONT_SIZE_INLINE_FORMAT])
    console.log('new VAL to apply ', val);
    this.quill.format(QUILL_FONT_SIZE_FORMAT, val, USER);

    // if(length === 0) {
    //   this.quill.format(QUILL_CUSTOM_FONT_SIZE_INLINE_FORMAT, val, USER);
    //   return
    // }
    // if(val !== format[QUILL_CUSTOM_FONT_SIZE_FORMAT]) {
    //   console.log('applying inline style ')
    //   this.quill.format(QUILL_CUSTOM_FONT_SIZE_INLINE_FORMAT, val, USER);
    // } else {
    //   console.log('applying block style ')
    //   this.quill.format(QUILL_CUSTOM_FONT_SIZE_FORMAT, val, USER);
    // }
  },
};

export default quillToolbarHandlers;
