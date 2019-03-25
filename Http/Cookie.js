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
RuntimeUI.Http.Cookie = class extends Runtime.CoreStruct{
	/**
	 * Return expire
	 * @param Cookie c
	 * @return int
	 */
	static getExpireTimestamp(c){
		if (c.expire == null){
			return 0;
		}
		return c.expire.getTimestamp();
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "RuntimeUI.Http.Cookie";}
	static getCurrentClassName(){return "RuntimeUI.Http.Cookie";}
	static getParentClassName(){return "Runtime.CoreStruct";}
	_init(){
		super._init();
		this.__name = "";
		Object.defineProperty(this, "name", { get: function() { return this.__name; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("name") }});
		this.__value = "";
		Object.defineProperty(this, "value", { get: function() { return this.__value; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("value") }});
		this.__expire = null;
		Object.defineProperty(this, "expire", { get: function() { return this.__expire; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("expire") }});
		this.__domain = "";
		Object.defineProperty(this, "domain", { get: function() { return this.__domain; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("domain") }});
		this.__path = "";
		Object.defineProperty(this, "path", { get: function() { return this.__path; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("path") }});
		this.__secure = false;
		Object.defineProperty(this, "secure", { get: function() { return this.__secure; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("secure") }});
		this.__httponly = false;
		Object.defineProperty(this, "httponly", { get: function() { return this.__httponly; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("httponly") }});
	}
	assignObject(obj){
		if (obj instanceof RuntimeUI.Http.Cookie){
			this.__name = obj.__name;
			this.__value = obj.__value;
			this.__expire = obj.__expire;
			this.__domain = obj.__domain;
			this.__path = obj.__path;
			this.__secure = obj.__secure;
			this.__httponly = obj.__httponly;
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		if (variable_name == "name")this.__name = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "value")this.__value = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "expire")this.__expire = Runtime.rtl.convert(value,"Runtime.DateTime",null,"");
		else if (variable_name == "domain")this.__domain = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "path")this.__path = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "secure")this.__secure = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "httponly")this.__httponly = Runtime.rtl.convert(value,"bool",false,"");
		else super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		if (variable_name == "name") return this.__name;
		else if (variable_name == "value") return this.__value;
		else if (variable_name == "expire") return this.__expire;
		else if (variable_name == "domain") return this.__domain;
		else if (variable_name == "path") return this.__path;
		else if (variable_name == "secure") return this.__secure;
		else if (variable_name == "httponly") return this.__httponly;
		return super.takeValue(variable_name, default_value);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
		if ((flag | 3)==3){
			names.push("name");
			names.push("value");
			names.push("expire");
			names.push("domain");
			names.push("path");
			names.push("secure");
			names.push("httponly");
		}
	}
	static getFieldInfoByName(field_name){
		return null;
	}
}