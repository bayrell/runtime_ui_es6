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
RuntimeUI.Events.UserEvent.UserEvent = class extends Runtime.CoreEvent{
	
	assignEvent(e)
	{
		this.setMap(new Runtime.Dict({
			"name": e.type,
			"currentElement": e.target,
			"target": e.currentTarget,
			"ui": e.currentTarget._ui,
			"bubbles": e.bubbles,
			"cancel_bubble": e.cancel_bubble,
			"cancelable": e.cancelable,
			"composed": e.composed,
			"default_prevented": e.default_prevented,
			"event_phase": e.eventPhase,
			"is_trusted": e.isTrusted,
			"es6_event": e,
		}));
	}
	
	static fromEvent(e)
	{
		var target = e.currentTarget || e.target;
		var doc = target.ownerDocument || target;
		var win = doc.defaultView;
		var obj = null;
		
		if (e.type == "click") obj = new RuntimeUI.Events.MouseEvent.MouseClickEvent();
		else if (e.type == "dblclick") obj = new RuntimeUI.Events.MouseEvent.MouseDoubleClickEvent();
		else if (e.type == "mousedown") obj = new RuntimeUI.Events.MouseEvent.MouseDownEvent();
		else if (e.type == "mouseenter") obj = new RuntimeUI.Events.MouseEvent.MouseEnterEvent();
		else if (e.type == "mouseleave") obj = new RuntimeUI.Events.MouseEvent.MouseLeaveEvent();
		else if (e.type == "mousemove") obj = new RuntimeUI.Events.MouseEvent.MouseMoveEvent();
		else if (e.type == "mouseout") obj = new RuntimeUI.Events.MouseEvent.MouseOutEvent();
		else if (e.type == "mouseover") obj = new RuntimeUI.Events.MouseEvent.MouseOverEvent();
		else if (e.type == "mouseup") obj = new RuntimeUI.Events.MouseEvent.MouseUpEvent();
		else if (e.type == "change") obj = new RuntimeUI.Events.UserEvent.ChangeEvent();
		else if (e.type == "focus") obj = new RuntimeUI.Events.UserEvent.FocusEvent();
		else if (e.type == "blur") obj = new RuntimeUI.Events.UserEvent.BlurEvent();
		
		if (obj == null)
			return null;
			
		obj.assignEvent(e);
		return obj;
	}
	/**
	 * Prevent default mouse event
	 */
	preventDefault(){
		this.defaultPrevented = true;
		
		this.es6_event.preventDefault();
	}
	/**
	 * Cancel event
	 */
	isCancel(){
		return this.cancelBubble;
	}
	/**
	 * Cancel event
	 */
	cancel(){
		
		this.es6_event.cancelBubble = true;
		this.es6_event.stopPropagation();
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "RuntimeUI.Events.UserEvent.UserEvent";}
	static getCurrentClassName(){return "RuntimeUI.Events.UserEvent.UserEvent";}
	static getParentClassName(){return "Runtime.CoreEvent";}
	_init(){
		super._init();
		this.__name = "";
		Object.defineProperty(this, "name", { get: function() { return this.__name; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("name") }});
		this.__bubbles = false;
		Object.defineProperty(this, "bubbles", { get: function() { return this.__bubbles; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("bubbles") }});
		this.__cancel_bubble = false;
		Object.defineProperty(this, "cancel_bubble", { get: function() { return this.__cancel_bubble; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("cancel_bubble") }});
		this.__cancelable = true;
		Object.defineProperty(this, "cancelable", { get: function() { return this.__cancelable; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("cancelable") }});
		this.__composed = true;
		Object.defineProperty(this, "composed", { get: function() { return this.__composed; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("composed") }});
		this.__default_prevented = false;
		Object.defineProperty(this, "default_prevented", { get: function() { return this.__default_prevented; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("default_prevented") }});
		this.__event_phase = 0;
		Object.defineProperty(this, "event_phase", { get: function() { return this.__event_phase; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("event_phase") }});
		this.__is_trusted = true;
		Object.defineProperty(this, "is_trusted", { get: function() { return this.__is_trusted; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("is_trusted") }});
		this.__ui = null;
		Object.defineProperty(this, "ui", { get: function() { return this.__ui; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("ui") }});
		this.__es6_event = null;
		Object.defineProperty(this, "es6_event", { get: function() { return this.__es6_event; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("es6_event") }});
		this.__currentElement = null;
		Object.defineProperty(this, "currentElement", { get: function() { return this.__currentElement; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("currentElement") }});
		this.__target = null;
		Object.defineProperty(this, "target", { get: function() { return this.__target; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("target") }});
	}
	assignObject(obj){
		if (obj instanceof RuntimeUI.Events.UserEvent.UserEvent){
			this.__name = obj.__name;
			this.__bubbles = obj.__bubbles;
			this.__cancel_bubble = obj.__cancel_bubble;
			this.__cancelable = obj.__cancelable;
			this.__composed = obj.__composed;
			this.__default_prevented = obj.__default_prevented;
			this.__event_phase = obj.__event_phase;
			this.__is_trusted = obj.__is_trusted;
			this.__ui = obj.__ui;
			this.__es6_event = obj.__es6_event;
			this.__currentElement = obj.__currentElement;
			this.__target = obj.__target;
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		if (variable_name == "name")this.__name = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "bubbles")this.__bubbles = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "cancel_bubble")this.__cancel_bubble = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "cancelable")this.__cancelable = Runtime.rtl.convert(value,"bool",true,"");
		else if (variable_name == "composed")this.__composed = Runtime.rtl.convert(value,"bool",true,"");
		else if (variable_name == "default_prevented")this.__default_prevented = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "event_phase")this.__event_phase = Runtime.rtl.convert(value,"int",0,"");
		else if (variable_name == "is_trusted")this.__is_trusted = Runtime.rtl.convert(value,"bool",true,"");
		else if (variable_name == "ui")this.__ui = Runtime.rtl.convert(value,"Runtime.UIStruct",null,"");
		else if (variable_name == "es6_event")this.__es6_event = Runtime.rtl.convert(value,"mixed",null,"");
		else if (variable_name == "currentElement")this.__currentElement = Runtime.rtl.convert(value,"mixed",null,"");
		else if (variable_name == "target")this.__target = Runtime.rtl.convert(value,"mixed",null,"");
		else super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		if (variable_name == "name") return this.__name;
		else if (variable_name == "bubbles") return this.__bubbles;
		else if (variable_name == "cancel_bubble") return this.__cancel_bubble;
		else if (variable_name == "cancelable") return this.__cancelable;
		else if (variable_name == "composed") return this.__composed;
		else if (variable_name == "default_prevented") return this.__default_prevented;
		else if (variable_name == "event_phase") return this.__event_phase;
		else if (variable_name == "is_trusted") return this.__is_trusted;
		else if (variable_name == "ui") return this.__ui;
		else if (variable_name == "es6_event") return this.__es6_event;
		else if (variable_name == "currentElement") return this.__currentElement;
		else if (variable_name == "target") return this.__target;
		return super.takeValue(variable_name, default_value);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
		if ((flag | 3)==3){
			names.push("name");
			names.push("bubbles");
			names.push("cancel_bubble");
			names.push("cancelable");
			names.push("composed");
			names.push("default_prevented");
			names.push("event_phase");
			names.push("is_trusted");
			names.push("ui");
			names.push("es6_event");
			names.push("currentElement");
			names.push("target");
		}
	}
	static getFieldInfoByName(field_name){
		return null;
	}
}