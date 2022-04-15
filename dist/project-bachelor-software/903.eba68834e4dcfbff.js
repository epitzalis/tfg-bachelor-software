"use strict";(self.webpackChunkproject_bachelor_software=self.webpackChunkproject_bachelor_software||[]).push([[903],{903:(E,C,c)=>{c.r(C),c.d(C,{HomeModule:()=>S});var p=c(9808),u=c(6801),t=c(2096);let h=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[p.ez,u.aw]]}),l})();var d=c(4959),a=c(4649),f=c(9565),v=c(9786),g=c(7241);let T=(()=>{class l{constructor(o){this.utilService=o}convertToUniversal(o){for(const e in a._q)o=this.utilService.replaceAll(o,e,a._q[e]);return o}convertToProposition(o){const e=this.convertHeaderToProposition(o[0]);return o.splice(0,1),[e,...this.convertRowsToProposition(o)]}convertHeaderToProposition(o){for(let e=0;e<o.length;e++){let n=o[e];for(let i=0;i<n.length;i++){const s=n[i];a.vR[s]&&(n=n.replace(s,a.vR[s]))}o[e]=n}return o}convertRowsToProposition(o){for(let e=0;e<o.length;e++){const n=o[e];for(let i=0;i<n.length;i++)o[e][i]="0"===n[i]?"F":"V"}return o}}return l.\u0275fac=function(o){return new(o||l)(t.LFG(g.f))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();const _=["inputCalculator"];function m(l,r){if(1&l&&(t.TgZ(0,"div",12),t._uU(1),t.qZA()),2&l){const o=t.oxw();t.xp6(1),t.hij(" ",o.errorMessage,"\n")}}function Z(l,r){1&l&&(t.TgZ(0,"div",13),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&l&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ERROR.GENERAL"),"\n"))}let A=(()=>{class l{constructor(o,e,n,i,s){this.calculatorService=o,this.conversionService=e,this.navigationService=n,this.translateService=i,this.renderer=s,this.booleType=a.ud,this.propositionType=a.Xd,this.typeCalculator=a.ud,this.errorMessage="",this.isException=!1}set iTypeCalculator(o){this.onClear(),this.typeCalculator=o}ngOnInit(){this.exceptionSubscription=this.calculatorService.$exception.subscribe(()=>{this.errorMessage="",this.isException=!0})}ngOnDestroy(){this.exceptionSubscription&&this.exceptionSubscription.unsubscribe()}get valueCalculator(){return this.inputCalculator.nativeElement.value}set valueCalculator(o){var e;(null===(e=this.inputCalculator)||void 0===e?void 0:e.nativeElement)&&this.renderer.setProperty(this.inputCalculator.nativeElement,"value",o)}onAddCharacter(o){if(this.valueCalculator){const e=this.valueCalculator,n=e.charAt(e.length-1);this.validateCharacter(o,n)&&(this.valueCalculator=e+o)}else this.valueCalculator=o}onBack(){this.valueCalculator=this.valueCalculator.slice(0,-1),this.clearErrorMessages()}onClear(){this.valueCalculator="",this.clearErrorMessages()}onCalculate(){if(this.valueCalculator){const o=this.conversionService.convertToUniversal(this.valueCalculator),e=this.calculatorService.getUsedVariables(o);if(e.length){const n=this.calculateArrayData(o,e);this.navigationService.toResult(this.typeCalculator,n)}}}calculateArrayData(o,e){let i=[this.calculatorService.getHeadArrayData(o,e)];return i=this.calculatorService.createResultEntries(i,e),i=this.calculatorService.fillInitialValues(i,e),i=this.calculatorService.calculateArrayData(i),this.typeCalculator===a.Xd&&(i=this.conversionService.convertToProposition(i)),i}validateCharacter(o,e){let i,n=!0;return this.clearErrorMessages(),a.A8.includes(e)?(i=this.translateService.instant("ERROR.AFTER_NEGATIVE"),n=a.FA.includes(o)||a.b0===o):a.xS.includes(e)?(i=this.translateService.instant("ERROR.AFTER_OPERATOR"),n=a.FA.includes(o)||o===a.b0||a.A8.includes(o)):a.FA.includes(e)?(i=this.translateService.instant("ERROR.AFTER_VARIABLE"),n=a.xS.includes(o)||a.LV===o):a.b0===e?(i=this.translateService.instant("ERROR.AFTER_OPEN_PARENTHESES"),n=a.A8.includes(o)||a.FA.includes(o)||a.b0===o):a.LV===e&&(i=this.translateService.instant("ERROR.AFTER_CLOSE_PARENTHESES"),n=a.xS.includes(o)||a.LV===o),n||(this.errorMessage=i),n}clearErrorMessages(){this.errorMessage="",this.isException=!1}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(v.R),t.Y36(T),t.Y36(f.f),t.Y36(u.sK),t.Y36(t.Qsj))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-calculator"]],viewQuery:function(o,e){if(1&o&&t.Gf(_,5),2&o){let n;t.iGM(n=t.CRH())&&(e.inputCalculator=n.first)}},inputs:{iTypeCalculator:"iTypeCalculator"},decls:36,vars:10,consts:[[1,"calculator","box","flex-container-column","flex-row-gap"],[1,"row"],["type","text","onCopy","return false","onDrag","return false","onDrop","return false","onPaste","return false","onkeypress","return false","autocomplete","off",1,"flex-full","input"],["inputCalculator",""],[1,"flex-half","flex-container-row","flex-column-gap"],[1,"flex-half","btn-clear","button","is-danger",3,"click"],[1,"flex-half","btn-back","button","is-warning",3,"click"],[1,"flex-half","button","is-success",3,"disabled","click"],[1,"flex-quarter","button",3,"click"],[1,"flex-half","button",3,"click"],["class","notification is-warning is-size-5",4,"ngIf"],["class","notification is-danger is-size-5",4,"ngIf"],[1,"notification","is-warning","is-size-5"],[1,"notification","is-danger","is-size-5"]],template:function(o,e){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"input",2,3),t.qZA(),t.TgZ(4,"div",1),t.TgZ(5,"div",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return e.onClear()}),t._uU(7," AC "),t.qZA(),t.TgZ(8,"button",6),t.NdJ("click",function(){return e.onBack()}),t._uU(9," DEL "),t.qZA(),t.qZA(),t.TgZ(10,"button",7),t.NdJ("click",function(){return e.onCalculate()}),t._uU(11," = "),t.qZA(),t.qZA(),t.TgZ(12,"div",1),t.TgZ(13,"button",8),t.NdJ("click",function(){return e.onAddCharacter(e.typeCalculator===e.booleType?"a":"p")}),t._uU(14),t.qZA(),t.TgZ(15,"button",8),t.NdJ("click",function(){return e.onAddCharacter(e.typeCalculator===e.booleType?"b":"q")}),t._uU(16),t.qZA(),t.TgZ(17,"button",8),t.NdJ("click",function(){return e.onAddCharacter(e.typeCalculator===e.booleType?"c":"r")}),t._uU(18),t.qZA(),t.TgZ(19,"button",8),t.NdJ("click",function(){return e.onAddCharacter(e.typeCalculator===e.booleType?"d":"s")}),t._uU(20),t.qZA(),t.qZA(),t.TgZ(21,"div",1),t.TgZ(22,"button",9),t.NdJ("click",function(){return e.onAddCharacter(e.typeCalculator===e.booleType?"\xac":"~")}),t._uU(23),t.qZA(),t.TgZ(24,"div",4),t.TgZ(25,"button",9),t.NdJ("click",function(){return e.onAddCharacter(e.typeCalculator===e.booleType?"x":"^")}),t._uU(26),t.qZA(),t.TgZ(27,"button",9),t.NdJ("click",function(){return e.onAddCharacter(e.typeCalculator===e.booleType?"+":"v")}),t._uU(28),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"div",1),t.TgZ(30,"button",9),t.NdJ("click",function(){return e.onAddCharacter("(")}),t._uU(31,"("),t.qZA(),t.TgZ(32,"button",9),t.NdJ("click",function(){return e.onAddCharacter(")")}),t._uU(33,")"),t.qZA(),t.qZA(),t.qZA(),t.YNc(34,m,2,1,"div",10),t.YNc(35,Z,3,3,"div",11)),2&o){const n=t.MAs(3);t.xp6(10),t.Q6J("disabled",0===n.value.length),t.xp6(4),t.hij(" ","boole"===e.typeCalculator?"a":"p"," "),t.xp6(2),t.hij(" ","boole"===e.typeCalculator?"b":"q"," "),t.xp6(2),t.hij(" ","boole"===e.typeCalculator?"c":"r"," "),t.xp6(2),t.hij(" ","boole"===e.typeCalculator?"d":"s"," "),t.xp6(3),t.hij(" ","boole"===e.typeCalculator?"\xac":"~"," "),t.xp6(3),t.hij(" ","boole"===e.typeCalculator?"x":"^"," "),t.xp6(2),t.hij(" ","boole"===e.typeCalculator?"+":"v"," "),t.xp6(6),t.Q6J("ngIf",e.errorMessage.length),t.xp6(1),t.Q6J("ngIf",e.isException)}},directives:[p.O5],pipes:[u.X$],styles:[".calculator{min-width:200px;max-width:600px;text-transform:uppercase;padding:20px}.calculator .row{display:flex;flex-direction:row;column-gap:10px}.calculator .row *{flex-grow:1}.calculator .row input{flex-basis:100%}.calculator .row input:disabled{background-color:#fff}.calculator .row button{cursor:pointer}\n"],encapsulation:2}),l})();const y=[{path:"",component:(()=>{class l{constructor(o,e){this.navigationService=o,this.activatedRoute=e,this.booleType=a.ud,this.propositionType=a.Xd}ngOnInit(){var o;this.typeCalculator=(null===(o=this.activatedRoute.snapshot.queryParams)||void 0===o?void 0:o.typeCalculator)||a.ud}onChangeSelect(o){this.typeCalculator=o,this.navigationService.toHome(this.typeCalculator)}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(f.f),t.Y36(d.gz))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-home"]],decls:29,vars:17,consts:[[1,"hero"],[1,"hero__container"],[1,"hero__container-text"],[1,"hero__container-arrow"],["href","#calculator"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 0 24 24","width","24px","fill","#ffffff"],["d","M24 24H0V0h24v24z","fill","none","opacity",".87"],["d","M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"],["id","calculator",1,"container"],[1,"tabs","is-large"],[3,"click"],[3,"iTypeCalculator"]],template:function(o,e){1&o&&(t.TgZ(0,"section",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1"),t.TgZ(4,"strong"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.qZA(),t._UZ(7,"br"),t.TgZ(8,"h3"),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.qZA(),t.TgZ(11,"div",3),t.TgZ(12,"a",4),t.O4$(),t.TgZ(13,"svg",5),t._UZ(14,"path",6),t._UZ(15,"path",7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.kcU(),t.TgZ(16,"section"),t.TgZ(17,"div",8),t.TgZ(18,"div",9),t.TgZ(19,"ul"),t.TgZ(20,"li",10),t.NdJ("click",function(){return e.onChangeSelect(e.booleType)}),t.TgZ(21,"a"),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.qZA(),t.TgZ(24,"li",10),t.NdJ("click",function(){return e.onChangeSelect(e.propositionType)}),t.TgZ(25,"a"),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(28,"app-calculator",11),t.qZA(),t.qZA()),2&o&&(t.xp6(5),t.Oqu(t.lcZ(6,9,"HOME.HERO_TITLE")),t.xp6(4),t.Oqu(t.lcZ(10,11,"HOME.HERO_SUBTITLE")),t.xp6(11),t.ekj("is-active",e.typeCalculator===e.booleType),t.xp6(2),t.Oqu(t.lcZ(23,13,"COMMONS.BOOLE")),t.xp6(2),t.ekj("is-active",e.typeCalculator===e.propositionType),t.xp6(2),t.Oqu(t.lcZ(27,15,"COMMONS.PROPOSITION")),t.xp6(2),t.Q6J("iTypeCalculator",e.typeCalculator))},directives:[A],pipes:[u.X$],styles:["#calculator{max-width:400px;padding-bottom:100px}.tabs li{cursor:pointer}\n"],encapsulation:2}),l})()}];let b=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[d.Bz.forChild(y)],d.Bz]}),l})(),S=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[p.ez,b,h,u.aw]]}),l})()}}]);