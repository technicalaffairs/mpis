//----------DHTML Menu Created using AllWebMenus PRO ver 5.3-#836---------------
//D:\Trans-Web\mpis.awm
var awmMenuName='menu';
var awmLibraryBuild=836;
var awmLibraryPath='/awmdata';
var awmImagesPath='/awmdata';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmAltUrl!='' && !awmSupported) window.location.replace(awmAltUrl);
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?7:(nua.indexOf('Gecko')>-1)?2:((document.layers)?3:((nua.indexOf('Opera')>-1)?4:((nua.indexOf('Mac')>-1)?5:1))));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='';
var awmPosID='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmHash='FNGIVPOLUTLMHKFIGGVI';
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["main-button-tile.gif",76,45,"main-buttonOver-tile.gif",76,45,"main-button-left.gif",30,45,"main-buttonOver-left.gif",30,45,"main-button-right.gif",33,45,"main-buttonOver-right.gif",33,45];
awmCreateCSS(0,1,0,n,n,n,n,n,'none','0','#000000',0,0);
awmCreateCSS(1,2,1,'#FFDFAD',n,0,'italic bold 11px Georgia, Times New Roman, Times, serif',n,'none','0','#000000','0px 10px 0px 10',1);
awmCreateCSS(0,2,1,'#F6FFAC',n,1,'italic bold 11px Georgia, Times New Roman, Times, serif',n,'none','0','#000000','0px 10px 0px 10',1);
awmCreateCSS(1,2,1,'#FFDFAD',n,0,'italic bold 11px Georgia, Times New Roman, Times, serif',n,'none','0','#000000','0px 10px 0px 10',0);
awmCreateCSS(0,2,1,'#F6FFAC',n,1,'italic bold 11px Georgia, Times New Roman, Times, serif',n,'none','0','#000000','0px 10px 0px 10',0);
awmCreateCSS(1,2,0,'#FFDFAD',n,0,'italic bold 11px Georgia',n,'none','0','#000000','0px 25px 0px 25',1);
awmCreateCSS(0,2,0,'#F6FFAC',n,1,'italic bold 11px Georgia',n,'none','0','#000000','0px 25px 0px 25',1);
awmCreateCSS(1,2,0,'#FFDFAD',n,0,'italic bold 11px Georgia',n,'none','0','#000000','0px 25px 0px 25',0);
awmCreateCSS(0,2,0,'#F6FFAC',n,1,'italic bold 11px Georgia',n,'none','0','#000000','0px 25px 0px 25',0);
awmCreateCSS(1,2,0,'#FFDFAD',n,0,'italic bold 11px Georgia',n,'none','0','#000000','0px 15px 0px 15',0);
awmCreateCSS(0,2,0,'#F6FFAC',n,1,'italic bold 11px Georgia',n,'none','0','#000000','0px 15px 0px 15',0);
awmCreateCSS(1,2,0,'#FFDFAD',n,0,'italic bold 11px Georgia',n,'none','0','#000000','0px 10px 0px 10',1);
awmCreateCSS(0,2,0,'#F6FFAC',n,1,'italic bold 11px Georgia',n,'none','0','#000000','0px 10px 0px 10',1);
awmCreateCSS(1,2,0,'#FFDFAD',n,0,'italic bold 11px Georgia',n,'none','0','#000000','0px 15px 0px 15',1);
awmCreateCSS(0,2,0,'#F6FFAC',n,1,'italic bold 11px Georgia',n,'none','0','#000000','0px 15px 0px 15',1);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,5,0,149,0,1,0,0,0,1,n,n,100,0,0,0,149,0,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,1,0,0,0,1);
it=s0.addItemWithImages(1,2,2,"Home",n,n,"",n,n,n,3,3,3,n,n,n,"index.htm",n,n,n,"index.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,0,n);
it=s0.addItemWithImages(3,4,4,"About Us",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,1,n);
var s1=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,9,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s1.addItemWithImages(5,6,6,"About Us",n,n,"",n,n,n,3,3,3,n,n,n,"about/about.htm",n,n,n,"about/about.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,66,n);
it=s1.addItemWithImages(5,6,6,"Organization",n,n,"",n,n,n,3,3,3,n,n,n,"about/Organize/graphics/mpisqc_org.jpg",n,n,n,"about/Organize/graphics/mpisqc_org.jpg",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,2,n);
it=s1.addItemWithImages(7,8,8,"Document Publishing System",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,3,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,10,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(5,6,6,"MPIS Doc Managment Process",n,n,"",n,n,n,3,3,3,n,n,n,"about/Dev_Process/graphics/Dmp.jpg",n,n,n,"about/Dev_Process/graphics/Dmp.jpg",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,4,n);
it=s2.addItemWithImages(5,6,6,"MPIS Doc Research &amp; Dev Process",n,n,"",n,n,n,3,3,3,n,n,n,"about/Dev_Process/graphics/rdp.JPG",n,n,n,"about/Dev_Process/graphics/rdp.JPG",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,5,n);
it=s2.addItemWithImages(5,6,6,"Document Publishing System",n,n,"",n,n,n,3,3,3,n,n,n,"about/Dev_Process/graphics/DPS.JPG",n,n,n,"about/Dev_Process/graphics/DPS.JPG",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,6,n);
it=s0.addItemWithImages(1,2,2,"What&#39; new",n,n,"",n,n,n,3,3,3,n,n,n,"whatsnew/whatsnew.htm",n,n,n,"whatsnew/whatsnew.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,7,n);
it=s0.addItemWithImages(1,2,2,"Manuals",n,n,"",n,n,n,3,3,3,n,n,n,"tech_resource/Manuals/manuals.htm",n,n,n,"tech_resource/Manuals/manuals.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,8,n);
it=s0.addItemWithImages(1,2,2,"Admin Inst",n,n,"",n,n,n,3,3,3,n,n,n,"admin_inst/admin_inst.htm",n,n,n,"admin_inst/admin_inst.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,9,n);
it=s0.addItemWithImages(3,4,4,"Coordinators",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,10,n);
var s1=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,11,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s1.addItemWithImages(9,10,10,"Meetings",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,11,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,12,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(5,6,6,"Meeting Names",n,n,"",n,n,n,3,3,3,n,n,n,"Coordinators/MPIS_Coordinators_attend.htm",n,n,n,"Coordinators/MPIS_Coordinators_attend.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,12,n);
it=s2.addItemWithImages(5,6,6,"Agenda",n,n,"",n,n,n,3,3,3,n,n,n,"Coordinators/MPIS_EETC_Coordinators_Agenda.htm",n,n,n,"Coordinators/MPIS_EETC_Coordinators_Agenda.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,13,n);
it=s2.addItemWithImages(5,6,6,"Responsabilities",n,n,"",n,n,n,3,3,3,n,n,n,"Coordinators/MPIS_Coordinators_Responsibiltes.htm",n,n,n,"Coordinators/MPIS_Coordinators_Responsibiltes.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,14,n);
it=s1.addItemWithImages(9,10,10,"Chairman Office Phones",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,15,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,13,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(5,6,6,"Main Coordinators Page",n,n,"",n,n,n,3,3,3,n,n,n,"Coordinators/MPIS_Coord_main Page.htm",n,n,n,"Coordinators/MPIS_Coord_main Page.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,16,n);
it=s2.addItemWithImages(5,6,6,"Chairman Office Phones",n,n,"",n,n,n,3,3,3,n,n,n,"Coordinators/15 Companies Chairmans.htm",n,n,n,"Coordinators/15 Companies Chairmans.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,17,n);
it=s1.addItemWithImages(5,6,6,"Coordinators Office Phones",n,n,"",n,n,n,3,3,3,n,n,n,"Coordinators/MPIS_Coordinators.htm",n,n,n,"Coordinators/MPIS_Coordinators.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,18,n);
it=s0.addItemWithImages(3,4,4,"Equipments",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,19,n);
var s1=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,14,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s1.addItemWithImages(7,8,8,"Electrical",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,20,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,15,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(11,12,12,"Circuit Breakers",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_CBs.htm",n,n,n,"appr_docs/ad_subst/ad_CBs.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,21,n);
it=s2.addItemWithImages(11,12,12,"Transformers",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_Trafo.htm",n,n,n,"appr_docs/ad_subst/ad_Trafo.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,22,n);
it=s2.addItemWithImages(11,12,12,"Tap Changers",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_tap changers.htm",n,n,n,"appr_docs/ad_subst/ad_tap changers.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,23,n);
it=s2.addItemWithImages(11,12,12,"Transmission Lines",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_trans/ad_trans.htm",n,n,n,"appr_docs/ad_trans/ad_trans.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,24,n);
it=s2.addItemWithImages(11,12,12,"Electrical Condensers",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_condensers.htm",n,n,n,"appr_docs/ad_subst/ad_condensers.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,25,n);
it=s2.addItemWithImages(11,12,12,"DS+ES Switches + GS","DS+ES Switches &amp; GS","DS+ES Switches &amp; GS","",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_DS, ES.htm",n,n,n,"appr_docs/ad_subst/ad_DS, ES.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,67,n);
it=s2.addItemWithImages(11,12,12,"CT+PT+LA",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_CT+PT+LA.htm",n,n,n,"appr_docs/ad_subst/ad_CT+PT+LA.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,26,n);
it=s2.addItemWithImages(11,12,12,"Battery+Chargers+UPS",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_Batteries.htm",n,n,n,"appr_docs/ad_subst/ad_Batteries.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,27,n);
it=s2.addItemWithImages(13,14,14,"Bus Bars",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_Busbars.htm",n,n,n,"appr_docs/ad_subst/ad_Busbars.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,28,n);
it=s2.addItemWithImages(5,6,6,"Technical Bulletin",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_TB-SS+PS.htm",n,n,n,"appr_docs/ad_subst/ad_TB-SS+PS.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,29,n);
it=s2.addItemWithImages(5,6,6,"Technical Directives",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_TD-SS+PS.htm",n,n,n,"appr_docs/ad_subst/ad_TD-SS+PS.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,30,n);
it=s1.addItemWithImages(7,8,8,"Mechanical",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,31,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,16,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(5,6,6,"Compressors",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_compressors.htm",n,n,n,"appr_docs/ad_subst/ad_compressors.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,32,n);
it=s2.addItemWithImages(5,6,6,"Diesels",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_dsl.htm",n,n,n,"appr_docs/ad_subst/ad_dsl.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,33,n);
it=s1.addItemWithImages(5,6,6,"Fire Fighting",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_Fire control.htm",n,n,n,"appr_docs/ad_subst/ad_Fire control.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,34,n);
it=s1.addItemWithImages(5,6,6,"Protection",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_pc/ad_pc.htm",n,n,n,"appr_docs/ad_pc/ad_pc.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,35,n);
it=s1.addItemWithImages(7,8,8,"Chemical",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,36,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,18,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(5,6,6,"Technical Procedures",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_chem/ad_chem.htm",n,n,n,"appr_docs/ad_chem/ad_chem.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,37,n);
it=s2.addItemWithImages(5,6,6,"Technical Bulletin",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_TB-SS+PS - Chem.htm",n,n,n,"appr_docs/ad_subst/ad_TB-SS+PS - Chem.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,38,n);
it=s2.addItemWithImages(5,6,6,"Technical Directives",n,n,"",n,n,n,3,3,3,n,n,n,"appr_docs/ad_subst/ad_TD-SS+PS - Chem.htm",n,n,n,"appr_docs/ad_subst/ad_TD-SS+PS - Chem.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,39,n);
it=s1.addItemWithImages(7,8,8,"Forms",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,40,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,17,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(5,6,6,"QC Inspection Forms",n,n,"",n,n,n,3,3,3,n,n,n,"forms/ad_QC_Page.htm",n,n,n,"forms/ad_QC_Page.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,41,n);
it=s2.addItemWithImages(5,6,6,"Technical Forms",n,n,"",n,n,n,3,3,3,n,n,n,"forms/Forms.htm",n,n,n,"forms/Forms.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,42,n);
it=s0.addItemWithImages(3,4,4,"Draft Docs",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,43,n);
var s1=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,2,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s1.addItemWithImages(5,6,6,"Protection",n,n,"",n,n,n,3,3,3,n,n,n,"Draft_Docs/draf_pc/draf_pc.htm",n,n,n,"Draft_Docs/draf_pc/draf_pc.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,44,n);
it=s1.addItemWithImages(5,6,6,"Transmission",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/draf_EETC.htm",n,n,n,"Trans Pages/draf_EETC.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,45,n);
it=s1.addItemWithImages(5,6,6,"Chemical",n,n,"",n,n,n,3,3,3,n,n,n,"Draft_Docs/draf_chem/draf_chem.htm",n,n,n,"Draft_Docs/draf_chem/draf_chem.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,46,n);
it=s0.addItemWithImages(3,4,4,"Zones",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,47,n);
var s1=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,1,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s1.addItemWithImages(7,8,8,"Cairo",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,48,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,3,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(5,6,6,"Substation",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/SS_Cai_Zone.htm",n,n,n,"Trans Pages/SS_Cai_Zone.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,49,n);
it=s2.addItemWithImages(5,6,6,"Protection",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/Prot_Cai_Zone.htm",n,n,n,"Trans Pages/Prot_Cai_Zone.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,50,n);
it=s1.addItemWithImages(7,8,8,"Canal",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,51,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,4,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(5,6,6,"Substation",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/SS_Canal_Zone.htm",n,n,n,"Trans Pages/SS_Canal_Zone.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,52,n);
it=s2.addItemWithImages(5,6,6,"Protection",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/Prot_Canal_Zone.htm",n,n,n,"Trans Pages/Prot_Canal_Zone.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,53,n);
it=s1.addItemWithImages(7,8,8,"Alex+West Delta",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,54,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,5,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(5,6,6,"Substation",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/SS_Alex_Zone.htm",n,n,n,"Trans Pages/SS_Alex_Zone.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,55,n);
it=s2.addItemWithImages(5,6,6,"Protection",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/Prot_Alex & West Delta_Zone.htm",n,n,n,"Trans Pages/Prot_Alex & West Delta_Zone.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,56,n);
it=s1.addItemWithImages(7,8,8,"Delta",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,57,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,6,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(5,6,6,"Substation",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/SS_ Delta_Zone.htm",n,n,n,"Trans Pages/SS_ Delta_Zone.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,58,n);
it=s2.addItemWithImages(5,6,6,"Protection",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/Prot_ Delta_Zone.htm",n,n,n,"Trans Pages/Prot_ Delta_Zone.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,59,n);
it=s1.addItemWithImages(7,8,8,"Middle Egypt",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,60,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,7,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(5,6,6,"Substation",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/Prot_MEgypt_Zone.htm",n,n,n,"Trans Pages/Prot_MEgypt_Zone.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,61,n);
it=s2.addItemWithImages(5,6,6,"Protection",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/Prot_MEgypt_Zone.htm",n,n,n,"Trans Pages/Prot_MEgypt_Zone.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,62,n);
it=s1.addItemWithImages(7,8,8,"Upper Egypt",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,63,n);
var s2=it.addSubmenu(0,0,-9,0,0,0,0,0,0,1,0,n,n,100,0,8,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(5,6,6,"Substation",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/SS_UEgypt.htm",n,n,n,"Trans Pages/SS_UEgypt.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,64,n);
it=s2.addItemWithImages(5,6,6,"Protection",n,n,"",n,n,n,3,3,3,n,n,n,"Trans Pages/Prot_UEgypt_Zone.htm",n,n,n,"Trans Pages/Prot_UEgypt_Zone.htm",n,0,0,2,2,3,3,4,5,5,1,1,1,0,0,n,n,n,0,0,0,65,n);
s0.pm.buildMenu();
}}
