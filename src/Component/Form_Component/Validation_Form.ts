import * as Yup from 'yup';

 export  const ValidationSchema=Yup.object({
    Todo:Yup.string().required('The Name of Task is Required')
})
