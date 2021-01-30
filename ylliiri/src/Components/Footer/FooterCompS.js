
import languages from "../../languages/languages";
import { DataLocaleStorage } from "../../localestorage";
import { localecontext } from "../../context/localecontext";
import { useContext } from "react";
import {
    FaFlag,
} from "react-icons/fa";
export const FooterCompSecond = () => {
    const { locale, setLocale } = useContext(localecontext);
    return (
        <div className="baseline">
            <FaFlag className="flag"/>
               <select value={locale}
                onChange={(event) => {
                  setLocale(event.target.value);
                  DataLocaleStorage.setLocale(event.target.value);
                }}
              >
                <option value={languages["en-us"].value}>
                  {languages["en-us"].label}
                </option>
                <option value={languages["sq-al"].value}>
                  {languages["sq-al"].label}
                </option>
              
              </select>
        </div>
    )
}
