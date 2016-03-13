/*!
 * datetime-ext
 * https://github.com/bkumar2/datetime-ext.git
 *
 * Copyright 2014 Bipul Kumar
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var datetimeExt = {
	parse: _parse
};

module.exports = datetimeExt;

function _parse(datetime,datetimeFormat) {
	console.log("datetime:",datetime,"datetimeFormat",datetimeFormat);
	var tokens = [/d+/,/M+/,/y+/,/h+/,/m+/,/s+/];
	var tokenIndexArray = new Array();
	for(var i=0; i<tokens.length; ++i) {
		tokenIndexArray[i] = datetimeFormat.search(tokens[i]);
	}
	var sortedIndexArray = tokenIndexArray.slice().sort(function(a, b){return a-b});
	console.log("tokenIndexArray:",tokenIndexArray);
	console.log("regexIndexArray:",sortedIndexArray);
	var regexIndexArray = new Array();
	for(var i=0; i<sortedIndexArray.length; ++i) {
		regexIndexArray[i] = tokenIndexArray.indexOf(sortedIndexArray[i])+1;
	}
	console.log("regexIndexArray:",regexIndexArray);
	var datetimeRegexPattern = datetimeFormat;
	var outputPattern = datetimeFormat;
	for(var i=0; i<tokens.length; ++i) {
		var matchedToken = datetimeRegexPattern.match(tokens[i]);
		datetimeRegexPattern = datetimeRegexPattern.replace(matchedToken,"(\\d{"+matchedToken[0].length+"})");
	}
	var datetimeRegex = new RegExp(datetimeRegexPattern);
	var outputDatetimeString = datetime.replace(datetimeRegex,"$2/$3/$1 $4:$5:$6")
	console.log("outputDatetimeString:",outputDatetimeString);
	var outputDatetime = new Date(outputDatetimeString);
	console.log("datetimeRegexPattern:",datetimeRegexPattern);
	console.log("outputDatetime:",outputDatetime);
	return outputDatetime;
}

_parse("2009-07-12 12:34:56","yyyy-MM-dd hh:mm:ss");
