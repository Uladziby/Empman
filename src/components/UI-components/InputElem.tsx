type PropsInputElem = {
  label: string;
  defaultVal: string;
};
export const InputElem: React.FC<PropsInputElem> = ({ label, defaultVal }) => {
  return (
    <>
      <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">
        {label}
      </label>
      <div className="col-sm-10">
        <input
          type="email"
          className="form-control form-control-lg"
          id="colFormLabelLg"
          placeholder="col-form-label-lg"
          defaultValue={defaultVal}
        />
      </div>
    </>
  );
};
