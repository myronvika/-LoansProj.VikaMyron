import { useFormikContext } from "formik";

const DateField = (props: dateFieldProps) => {
    const { values, validateForm, touched, errors } = useFormikContext<any>();
    console.log("In date field dklskdmksldl", values[props.field], );
    
    return (
        <div className="mb-3">
            <label htmlFor={props.field}>{props.displayName}</label>

            <input type="date" className="form-control"
                id={props.field}
                name={props.field}
                defaultValue={values[props.field]?.toLocaleDateString("en-US")}
                onChange={e => {
                    const date = new Date(e.currentTarget.value + "T00:00:00");
                    values[props.field] = date;
                    validateForm();
                }} />
                {touched[props.field] && errors[props.field] ? 
                (<div className="text-danger">{errors[props.field]?.toString()}</div>)
                : null}
        </div>
    )
};

export default DateField;

interface dateFieldProps {
    field: string,
    displayName: string,
}