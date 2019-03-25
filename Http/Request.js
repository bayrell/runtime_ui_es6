"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof RuntimeUI == 'undefined') RuntimeUI = {};
if (typeof RuntimeUI.Http == 'undefined') RuntimeUI.Http = {};
RuntimeUI.Http.Request = class extends Runtime.CoreStruct{
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "RuntimeUI.Http.Request";}
	static getCurrentClassName(){return "RuntimeUI.Http.Request";}
	static getParentClassName(){return "Runtime.CoreStruct";}
	_init(){
		super._init();
		this.METHOD_GET = "GET";
		this.METHOD_HEAD = "HEAD";
		this.METHOD_POST = "POST";
		this.METHOD_PUT = "PUT";
		this.METHOD_DELETE = "DELETE";
		this.METHOD_CONNECT = "CONNECT";
		this.METHOD_OPTIONS = "OPTIONS";
		this.METHOD_TRACE = "TRACE";
		this.METHOD_PATCH = "PATCH";
		this.__uri = "";
		Object.defineProperty(this, "uri", { get: function() { return this.__uri; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("uri") }});
		this.__host = "";
		Object.defineProperty(this, "host", { get: function() { return this.__host; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("host") }});
		this.__method = "GET";
		Object.defineProperty(this, "method", { get: function() { return this.__method; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("method") }});
		this.__query = null;
		Object.defineProperty(this, "query", { get: function() { return this.__query; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("query") }});
		this.__payload = null;
		Object.defineProperty(this, "payload", { get: function() { return this.__payload; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("payload") }});
		this.__cookies = null;
		Object.defineProperty(this, "cookies", { get: function() { return this.__cookies; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("cookies") }});
		this.__headers = null;
		Object.defineProperty(this, "headers", { get: function() { return this.__headers; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("headers") }});
		this.__params = null;
		Object.defineProperty(this, "params", { get: function() { return this.__params; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("params") }});
		this.__start_time = 0;
		Object.defineProperty(this, "start_time", { get: function() { return this.__start_time; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("start_time") }});
	}
	assignObject(obj){
		if (obj instanceof RuntimeUI.Http.Request){
			this.__uri = obj.__uri;
			this.__host = obj.__host;
			this.__method = obj.__method;
			this.__query = obj.__query;
			this.__payload = obj.__payload;
			this.__cookies = obj.__cookies;
			this.__headers = obj.__headers;
			this.__params = obj.__params;
			this.__start_time = obj.__start_time;
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		if (variable_name == "uri")this.__uri = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "host")this.__host = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "method")this.__method = Runtime.rtl.convert(value,"string","GET","");
		else if (variable_name == "query")this.__query = Runtime.rtl.convert(value,"Runtime.Dict",null,"string");
		else if (variable_name == "payload")this.__payload = Runtime.rtl.convert(value,"Runtime.Dict",null,"string");
		else if (variable_name == "cookies")this.__cookies = Runtime.rtl.convert(value,"Runtime.Dict",null,"string");
		else if (variable_name == "headers")this.__headers = Runtime.rtl.convert(value,"Runtime.Dict",null,"string");
		else if (variable_name == "params")this.__params = Runtime.rtl.convert(value,"Runtime.Dict",null,"string");
		else if (variable_name == "start_time")this.__start_time = Runtime.rtl.convert(value,"int",0,"");
		else super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		if (variable_name == "uri") return this.__uri;
		else if (variable_name == "host") return this.__host;
		else if (variable_name == "method") return this.__method;
		else if (variable_name == "query") return this.__query;
		else if (variable_name == "payload") return this.__payload;
		else if (variable_name == "cookies") return this.__cookies;
		else if (variable_name == "headers") return this.__headers;
		else if (variable_name == "params") return this.__params;
		else if (variable_name == "start_time") return this.__start_time;
		return super.takeValue(variable_name, default_value);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
		if ((flag | 3)==3){
			names.push("uri");
			names.push("host");
			names.push("method");
			names.push("query");
			names.push("payload");
			names.push("cookies");
			names.push("headers");
			names.push("params");
			names.push("start_time");
		}
	}
	static getFieldInfoByName(field_name){
		return null;
	}
}
RuntimeUI.Http.Request.METHOD_GET = "GET";
RuntimeUI.Http.Request.METHOD_HEAD = "HEAD";
RuntimeUI.Http.Request.METHOD_POST = "POST";
RuntimeUI.Http.Request.METHOD_PUT = "PUT";
RuntimeUI.Http.Request.METHOD_DELETE = "DELETE";
RuntimeUI.Http.Request.METHOD_CONNECT = "CONNECT";
RuntimeUI.Http.Request.METHOD_OPTIONS = "OPTIONS";
RuntimeUI.Http.Request.METHOD_TRACE = "TRACE";
RuntimeUI.Http.Request.METHOD_PATCH = "PATCH";