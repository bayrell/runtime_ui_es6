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
if (typeof RuntimeUI.Events == 'undefined') RuntimeUI.Events = {};
if (typeof RuntimeUI.Events.UserEvent == 'undefined') RuntimeUI.Events.UserEvent = {};
RuntimeUI.Events.UserEvent.ChangeEvent = class extends RuntimeUI.Events.UserEvent.UserEvent{
	
	assignEvent(e)
	{
		super.assignEvent(e);
		this.setMap(new Runtime.Dict({
			"value": e.currentTarget.value,
		}));
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "RuntimeUI.Events.UserEvent.ChangeEvent";}
	static getCurrentClassName(){return "RuntimeUI.Events.UserEvent.ChangeEvent";}
	static getParentClassName(){return "RuntimeUI.Events.UserEvent.UserEvent";}
	_init(){
		super._init();
		this.ES6_EVENT_NAME = "change";
		this.__value = "";
		Object.defineProperty(this, "value", { get: function() { return this.__value; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("value") }});
	}
	assignObject(obj){
		if (obj instanceof RuntimeUI.Events.UserEvent.ChangeEvent){
			this.__value = obj.__value;
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		if (variable_name == "value")this.__value = Runtime.rtl.convert(value,"string","","");
		else super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		if (variable_name == "value") return this.__value;
		return super.takeValue(variable_name, default_value);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
		if ((flag | 3)==3){
			names.push("value");
		}
	}
	static getFieldInfoByName(field_name){
		return null;
	}
}
RuntimeUI.Events.UserEvent.ChangeEvent.ES6_EVENT_NAME = "change";