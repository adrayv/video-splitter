import React from "react";
import { secondsToTimeStamp } from "../../utils/time";

export default ({ seconds }) => <p>{secondsToTimeStamp(seconds)}</p>;
