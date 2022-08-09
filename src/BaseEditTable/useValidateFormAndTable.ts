import type { MutableRefObject } from 'react';
import type { FormInstanceFunctions } from 'tdesign-react';

import type { BaseEditTableInstance } from './type';

/**
 * @description 用于校验表单以及其内的 baseEditTable
 * @param formRef 表单的 Ref
 * @param BaseEditTableRef 可编辑表格的 ref 们
 * @returns boolean
 */
export async function useValidateFormAndTable(
  formRef: MutableRefObject<FormInstanceFunctions>,
  BaseEditTableRef: MutableRefObject<BaseEditTableInstance>[],
) {
  const formValidate = await formRef.current?.validate?.();
  const formValidateResult = typeof formValidate === 'boolean' ? formValidate : !formValidate;

  let baseEditTableValidateResult = true;
  BaseEditTableRef.forEach((item) => {
    if (!item?.current?.validateAll()) baseEditTableValidateResult = false;
  });

  return formValidateResult && baseEditTableValidateResult;
}
