import {Quill} from 'react-quill-2'


/**
 * Quill size options
 */

//we are going to override the Class Attributor Associated with the "size" hardcoded format/size
export const QUILL_FONT_SIZE_FORMAT = "size"
// class that will appear in the dom will get appended with "-${value}"
export const QUILL_CUSTOM_SIZE_CSS_CLASS = "ql-custom-font-size"

//custom format all together you can do anything you want with this and clal it from anywhere
export const QUILL_CUSTOM_FONT_SIZE_INLINE_FORMAT = "ql-custom-inline-font-size-class"
//again class that will appear in DOM 
export const QUILL_CUSTOM_FONT_SIZE_INLINE_CSS_CLASS = "ql-custom-inline-font-size"
//white list of available values that will actually get appended to the DOM
export const QUILL_CUSTOM_SIZE_WHITELIST = ["tiny", "small", "normal", "large", "huge"]
/***************************************************************************/
// const MainBlot = Quill.import('blots/block');
// MainBlot.className = QUILL_CUSTOM_SIZE_CSS_CLASS + "-normal" // to make things consistent

export default function quillSetup() {
    //parchment is what quill relies on to make DOM manipulations. 
    const Parchment = Quill.import("parchment");
  //CUSTOM BLOCK
    let CustomSizeClassAttributor = new Parchment.ClassAttributor(
      QUILL_FONT_SIZE_FORMAT,
      QUILL_CUSTOM_SIZE_CSS_CLASS,
      {
          //there are hard coded SCOPES within Parchment.Scope the do various different things. 
        scope: Parchment.Scope.BLOCK_ATTRIBUTE,
        whitelist: QUILL_CUSTOM_SIZE_WHITELIST,
      }
    );
    console.log(CustomSizeClassAttributor)
    Quill.register(CustomSizeClassAttributor, true);
    //CUSTOM INLINE
    let CustomSizeInlineClass = new Parchment.ClassAttributor(
      QUILL_CUSTOM_FONT_SIZE_INLINE_FORMAT,
      QUILL_CUSTOM_FONT_SIZE_INLINE_CSS_CLASS,
      {
        scope: Parchment.Scope.INLINE_BLOCK,
        whitelist: QUILL_CUSTOM_SIZE_WHITELIST,
      }
    );
    Quill.register(CustomSizeInlineClass, true);
    Quill.register('formats/size', CustomSizeClassAttributor);
    console.log(Quill.imports)
    console.log(Parchment.Scope)
}