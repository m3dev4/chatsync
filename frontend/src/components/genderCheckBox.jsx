import React from "react";

const GenderCheckBox = ({ onCheckboxChange, selectGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectGender === "male" ? "selected" : ""}`}>
          <span className="label-text">Homme</span>
          <input 
            type="checkbox" 
            className="checkbox border-slate-900" 
            checked={selectGender === "male"}
            onChange={() => onCheckboxChange("male")}  
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectGender === "female" ? "selected" : ""}`}>
          <span className="label-text">Femme</span>
          <input 
            type="checkbox" 
            className="checkbox border-slate-900" 
            checked={selectGender === "female"}
            onChange={() => onCheckboxChange("female")} 
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
