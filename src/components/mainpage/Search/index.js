import React from "react";
import {navigate} from "gatsby";
import {Formik, Field, Form, ErrorMessage} from "formik";
import './search.scss'
export const SearchBox = () => {
    const validate = values => {
        const errors = {};
        if (!values.query) {
            errors.query = 'Query required';
        }
        return errors;
    };
    const handleForm = async (values) => {
        await navigate(`/search?q=${values.query}`)
    }
    return (
        <Formik initialValues={{
            name: '',
            email: '',
            message: ''
        }} onSubmit={handleForm}
                validate={validate}
        >
            <Form className={'search__container__box'}>
                <div className={'search__container__box__field'}>
                    <label htmlFor="query" hidden={true}>Query</label>
                    <Field id={'query'} name={'query'} className={'search__container__box__field__input'} placeholder={'Search for articles'}/>
                    <ErrorMessage name={'email'}>{msg => <span className={'formFieldError formFieldError--query'}>{msg}</span>}</ErrorMessage>
                </div>
                <button type={'submit'} className={'search__container__box__button'}>Browse</button>
            </Form>
        </Formik>
    )
}

const Search = () => {
    return(
        <div className={'search'}>
            <div className={'search__container'}>
                <h3>Search for great content</h3>
                <SearchBox/>
            </div>
        </div>

    )
}

export default Search