import React from 'react';

//em khong hieu lam tu ".map((fieldName, i) tro di a"
// chinh xac thi 'i' va key={i} hoat dong nhu the nao a. ?
export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>
