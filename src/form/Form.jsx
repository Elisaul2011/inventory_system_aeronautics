
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { useFormik } from "formik";
import { Button } from "primereact/button";
import PropTypes from "prop-types";

export const Form = ({title, dataForm, bodyComponent, functionForm}) => {

    const formik = useFormik({
        initialValues: bodyComponent,
        onSubmit: (values) => functionForm(values),
    });

    return (
        <div>
            <p>
                {title}
            </p>

            <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-center gap-5 w-full ">
                {/* Este es el objeto que vas a mapear */}
                {dataForm.map((inputType, contador) => 
                    (inputType.type == 'text' && 
                        <span key={contador} className="p-float-label w-full">
                            <InputText id={inputType.nameInput}
                            value={formik.values[inputType.nameInput]}
                            onChange={(e) => {
                                formik.setFieldValue(inputType.nameInput, e.target.value);
                            }}
                            />
                            <label htmlFor={inputType.nameInput}>{inputType.label}</label>
                        </span>
                    ) ||

                (inputType.type == 'password' && 
                    <span key={inputType}  className="p-float-label w-full">
                    <Password inputId="password" value={formik.values[inputType.nameInput]}
                            onChange={(e) => {
                                formik.setFieldValue(inputType.nameInput, e.target.value);
                            }} />
                    <label htmlFor="password">{inputType.label}</label>
                    </span>
                )
                )}
                

                <Button label="Enviar" type="submit" />
            </form>
        
        </div>
    )
}

Form.propTypes = {
    title: PropTypes.string,
    dataForm: PropTypes.array,
    bodyComponent: PropTypes.object,
    functionForm: PropTypes.func,
}