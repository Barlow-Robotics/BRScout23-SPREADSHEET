var app = SpreadsheetApp;
var ss = app.getActiveSpreadsheet();
var activeSheet = ss.getSheetByName("Clarified Match Data");
var rows = activeSheet.getDataRange().getValues();
var activeSheet2 = ss.getSheetByName("Overall Stats");
var rows2 = activeSheet2.getDataRange().getValues();
var filter = activeSheet2.getFilter();
var asciiCharFactor = 65;

function brScoutScript2023() {
  filter.sort(1, true);
  rows2 = activeSheet2.getDataRange().getValues();
  congregateIndexes();
  filterIndexesByTeam();
  indexDataRetrieval();
  calcStats();
  calcAbilityScore();
}

//for team index "mentions"
var t95 = [];
var t155 = [];
var t178 = [];
var t195 = [];
var t230 = [];
var t236 = [];
var t558 = [];
var t571 = [];
var t999 = [];
var t1027 = [];
var t1058 = [];
var t1071 = [];
var t1124 = [];
var t1699 = [];
var t1991 = [];
var t2064 = [];
var t2170 = [];
var t2712 = [];
var t3146 = [];
var t3182 = [];
var t3323 = [];
var t3464 = [];
var t3634 = [];
var t4572 = [];
var t4628 = [];
var t5142 = [];
var t5746 = [];
var t5856 = [];
var t6346 = [];
var t6723 = [];
var t7407 = [];
var t7694 = [];
var t7760 = [];
var t7869 = [];
var t8085 = [];
var t8167 = [];
var t8889 = [];
var t9056 = [];
var t9193 = [];
var t9216 = [];

//index --> data transfer
var d95 = [];
var d155 = [];
var d178 = [];
var d195 = [];
var d230 = [];
var d236 = [];
var d558 = [];
var d571 = [];
var d999 = [];
var d1027 = [];
var d1058 = [];
var d1071 = [];
var d1124 = [];
var d1699 = [];
var d1991 = [];
var d2064 = [];
var d2170 = [];
var d2712 = [];
var d3146 = [];
var d3182 = [];
var d3323 = [];
var d3464 = [];
var d3634 = [];
var d4572 = [];
var d4628 = [];
var d5142 = [];
var d5746 = [];
var d5856 = [];
var d6346 = [];
var d6723 = [];
var d7407 = [];
var d7694 = [];
var d7760 = [];
var d7869 = [];
var d8085 = [];
var d8167 = [];
var d8889 = [];
var d9056 = [];
var d9193 = [];
var d9216 = [];

var allTeams = [
   t95, //0
  t155, //1
  t178, //2
  t195, //3
  t230, //4
  t236, //5
  t558, //6
  t571, //7
  t999, //8
  t1027, //9
  t1058, //10
  t1071, //11
  t1124, //12
  t1699, //13
  t1991, //14
  t2064, //15
  t2170, //16
  t2712, //17
  t3146, //18
  t3182, //19
  t3323, //20
  t3464, //21
  t3634, //22
  t4572, //23
  t4628, //24
  t5142, //25
  t5746, //26
  t5856, //27
  t6346, //28
  t6723, //29
  t7407, //30
  t7694, //31
  t7760, //32
  t7869, //33
  t8085, //34
  t8167, //35
  t8889, //36
  t9056, //37
  t9193, //38
  t9216 //39
];

var dataTeams = [
  d95, //0
  d155, //1
  d178, //2
  d195, //3
  d230, //4
  d236, //5
  d558, //6
  d571, //7
  d999, //8
  d1027, //9
  d1058, //10
  d1071, //11
  d1124, //12
  d1699, //13
  d1991, //14
  d2064, //15
  d2170, //16
  d2712, //17
  d3146, //18
  d3182, //19
  d3323, //20
  d3464, //21
  d3634, //22
  d4572, //23
  d4628, //24
  d5142, //25
  d5746, //26
  d5856, //27
  d6346, //28
  d6723, //29
  d7407, //30
  d7694, //31
  d7760, //32
  d7869, //33
  d8085, //34
  d8167, //35
  d8889, //36
  d9056, //37
  d9193, //38
  d9216 //39
];

var abilityScores = [];

var totalTeams = allTeams.length;
var rawData = [];
var numCols = 18; //includes columns B through D and F which are being disregarded sheet-wise

function congregateIndexes(){
  //Go through each row and collect the team number for which the data is being recorded
  for (let i=4; i<=500; i++){
    var logs = activeSheet.getRange(i, 5, 1, numCols).getValue().toString();
    rawData.push(logs);
    }
}

function filterIndexesByTeam(){
  //Storing the row numbers that each team has data in in its individual tArray
  for (let j=0; j<rawData.length; j++){
    if (rawData[j].toString() == "95"){
      t95.push(j + 4);
    } else if (rawData[j].toString() == "155"){
      t155.push(j + 4);
    } else if (rawData[j].toString() == "178"){
      t178.push(j + 4);
    } else if (rawData[j].toString() == "195"){
      t195.push(j + 4);
    } else if (rawData[j].toString() == "230"){
      t230.push(j + 4);
    } else if (rawData[j].toString() == "236"){
      t236.push(j + 4);
    } else if (rawData[j].toString() == "558"){
      t558.push(j + 4);
    } else if (rawData[j].toString() == "571"){
      t571.push(j + 4);
    } else if (rawData[j].toString() == "999"){
      t999.push(j + 4);
    } else if (rawData[j].toString() == "1027"){
      t1027.push(j + 4);
    } else if (rawData[j].toString() == "1058"){
      t1058.push(j + 4);
    } else if (rawData[j].toString() == "1071"){
      t1071.push(j + 4);
    } else if (rawData[j].toString() == "1124"){
      t1124.push(j + 4);
    } else if (rawData[j].toString() == "1699"){
      t1699.push(j + 4);
    } else if (rawData[j].toString() == "1991"){
      t1991.push(j + 4);
    } else if (rawData[j].toString() == "2064"){
      t2064.push(j + 4);
    } else if (rawData[j].toString() == "2170"){
      t2170.push(j + 4);
    } else if (rawData[j].toString() == "2712"){
      t2712.push(j + 4);
    } else if (rawData[j].toString() == "3146"){
      t3146.push(j + 4);
    } else if (rawData[j].toString() == "3182"){
      t3182.push(j + 4);
    } else if (rawData[j].toString() == "3323"){
      t3323.push(j + 4);
    } else if (rawData[j].toString() == "3464"){
      t3464.push(j + 4);
    } else if (rawData[j].toString() == "3634"){
      t3634.push(j + 4);
    } else if (rawData[j].toString() == "4572"){
      t4572.push(j + 4);
    } else if (rawData[j].toString() == "4628"){
      t4628.push(j + 4);
    } else if (rawData[j].toString() == "5142"){
      t5142.push(j + 4);
    } else if (rawData[j].toString() == "5746"){
      t5746.push(j + 4);
    } else if (rawData[j].toString() == "5856"){
      t5856.push(j + 4);
    } else if (rawData[j].toString() == "6346"){
      t6346.push(j + 4);
    } else if (rawData[j].toString() == "6723"){
      t6723.push(j + 4);
    } else if (rawData[j].toString() == "7407"){
      t7407.push(j + 4);
    } else if (rawData[j].toString() == "7694"){
      t7694.push(j + 4);
    } else if (rawData[j].toString() == "7760"){
      t7760.push(j + 4);
    } else if (rawData[j].toString() == "7869"){
      t7869.push(j + 4);
    } else if (rawData[j].toString() == "8085"){
      t8085.push(j + 4);
    } else if (rawData[j].toString() == "8167"){
      t8167.push(j + 4);
    } else if (rawData[j].toString() == "8889"){
      t8889.push(j + 4);
    } else if (rawData[j].toString() == "9056"){
      t9056.push(j + 4);
    } else if (rawData[j].toString() == "9193"){
      t9193.push(j + 4);
    } else if (rawData[j].toString() == "9216"){
      t9216.push(j + 4);
    }
  }
}

function indexDataRetrieval(){
  //Taking each row and putting its data into its team's corresponding data array
  for (let k=0; k<allTeams.length; k++){
    var currentTeam = allTeams[k];
    for (let l=0; l<currentTeam.length; l++){
      var currentIndex = currentTeam[l];
      var teamMatchStats = rows[currentIndex - 1];
      dataTeams[k].push(teamMatchStats);
    }
  }
}

function calcStats(){
  modeLeftComm();
  avgAutoTop();
  avgAutoMid();
  avgAutoBottom();
  modeAutoDock();
  modeAutoEng();
  avgTeleopTop();
  avgTeleopMid();
  avgTeleopBottom();
  modeDef();
  modePark();
}

function modeLeftComm(){
  for (let m=0; m<dataTeams.length; m++){
    var currentTeamData = dataTeams[m];
    var trueCount = 0;
    for (let n=0; n<currentTeamData.length; n++){
      if (currentTeamData[n]['G'.charCodeAt() - asciiCharFactor]){
        trueCount++;
      }
    }
    if(currentTeamData.length > 0){
      if (trueCount/currentTeamData.length > 0.5){
        activeSheet2.getRange(m+4, 1 + 'B'.charCodeAt() - asciiCharFactor).setValue(true);
      } else {
        activeSheet2.getRange(m+4, 1 + 'B'.charCodeAt() - asciiCharFactor).setValue(false);
      }
    } else {
      activeSheet2.getRange(m+4, 1 + 'B'.charCodeAt() - asciiCharFactor).clearContent();
    }
    
  }
}

function avgAutoTop(){
  for (let m=0; m<dataTeams.length; m++){
    var currentTeamData = dataTeams[m];
    var sum = 0;
    for (let n=0; n<currentTeamData.length; n++){
      sum += currentTeamData[n]['H'.charCodeAt() - asciiCharFactor];
    }
    if(currentTeamData.length > 0){
          activeSheet2.getRange(m+4, 1 + 'C'.charCodeAt() - asciiCharFactor).setValue(sum/currentTeamData.length);
    } else {
      activeSheet2.getRange(m+4, 1 + 'C'.charCodeAt() - asciiCharFactor).clearContent();
    }    
  }
}

function avgAutoMid(){
  for (let m=0; m<dataTeams.length; m++){
    var currentTeamData = dataTeams[m];
    var sum = 0;
    for (let n=0; n<currentTeamData.length; n++){
      sum += currentTeamData[n]['I'.charCodeAt() - asciiCharFactor];
    }
    if(currentTeamData.length > 0){
          activeSheet2.getRange(m+4, 1 + 'D'.charCodeAt() - asciiCharFactor).setValue(sum/currentTeamData.length);
    } else {
      activeSheet2.getRange(m+4, 1 + 'D'.charCodeAt() - asciiCharFactor).clearContent();
    }    
  }
}

function avgAutoBottom(){
  for (let m=0; m<dataTeams.length; m++){
    var currentTeamData = dataTeams[m];
    var sum = 0;
    for (let n=0; n<currentTeamData.length; n++){
      sum += currentTeamData[n]['J'.charCodeAt() - asciiCharFactor];
    }
    if(currentTeamData.length > 0){
          activeSheet2.getRange(m+4, 1 + 'E'.charCodeAt() - asciiCharFactor).setValue(sum/currentTeamData.length);
    } else {
      activeSheet2.getRange(m+4, 1 + 'E'.charCodeAt() - asciiCharFactor).clearContent();
    }    
  }
}

function modeAutoDock(){
  for (let m=0; m<dataTeams.length; m++){
    var currentTeamData = dataTeams[m];
    var trueCount = 0;
    for (let n=0; n<currentTeamData.length; n++){
      if (currentTeamData[n]['K'.charCodeAt() - asciiCharFactor]){
        trueCount++;
      }
    }
    if(currentTeamData.length > 0){
      if (trueCount/currentTeamData.length >= 0.5){
        activeSheet2.getRange(m+4, 1 + 'F'.charCodeAt() - asciiCharFactor).setValue(true);
      } else {
        activeSheet2.getRange(m+4, 1 + 'F'.charCodeAt() - asciiCharFactor).setValue(false);
      }
    } else {
      activeSheet2.getRange(m+4, 1 + 'F'.charCodeAt() - asciiCharFactor).clearContent();
    }
    
  }
}

function modeAutoEng(){
  for (let m=0; m<dataTeams.length; m++){
    var currentTeamData = dataTeams[m];
    var trueCount = 0;
    for (let n=0; n<currentTeamData.length; n++){
      if (currentTeamData[n]['L'.charCodeAt() - asciiCharFactor]){
        trueCount++;
      }
    }
    if(currentTeamData.length > 0){
      if (trueCount/currentTeamData.length >= 0.5){
        activeSheet2.getRange(m+4, 1 + 'G'.charCodeAt() - asciiCharFactor).setValue(true);
      } else {
        activeSheet2.getRange(m+4, 1 + 'G'.charCodeAt() - asciiCharFactor).setValue(false);
      }
    } else {
      activeSheet2.getRange(m+4, 1 + 'G'.charCodeAt() - asciiCharFactor).clearContent();
    }
    
  }
}

function avgTeleopTop(){
  for (let m=0; m<dataTeams.length; m++){
    var currentTeamData = dataTeams[m];
    var sum = 0;
    for (let n=0; n<currentTeamData.length; n++){
      sum += currentTeamData[n]['M'.charCodeAt() - asciiCharFactor];
    }
    if(currentTeamData.length > 0){
          activeSheet2.getRange(m+4, 1 + 'H'.charCodeAt() - asciiCharFactor).setValue(sum/currentTeamData.length);
    } else {
      activeSheet2.getRange(m+4, 1 + 'H'.charCodeAt() - asciiCharFactor).clearContent();
    }    
  }
}

function avgTeleopMid(){
  for (let m=0; m<dataTeams.length; m++){
    var currentTeamData = dataTeams[m];
    var sum = 0;
    for (let n=0; n<currentTeamData.length; n++){
      sum += currentTeamData[n]['N'.charCodeAt() - asciiCharFactor];
    }
    if(currentTeamData.length > 0){
          activeSheet2.getRange(m+4, 1 + 'I'.charCodeAt() - asciiCharFactor).setValue(sum/currentTeamData.length);
    } else {
      activeSheet2.getRange(m+4, 1 + 'I'.charCodeAt() - asciiCharFactor).clearContent();
    }    
  }
}

function avgTeleopBottom(){
  for (let m=0; m<dataTeams.length; m++){
    var currentTeamData = dataTeams[m];
    var sum = 0;
    for (let n=0; n<currentTeamData.length; n++){
      sum += currentTeamData[n]['O'.charCodeAt() - asciiCharFactor];
    }
    if(currentTeamData.length > 0){
          activeSheet2.getRange(m+4, 1 + 'J'.charCodeAt() - asciiCharFactor).setValue(sum/currentTeamData.length);
    } else {
      activeSheet2.getRange(m+4, 1 + 'J'.charCodeAt() - asciiCharFactor).clearContent();
    }    
  }
}

function modeDef(){
  for (let m=0; m<dataTeams.length; m++){
    var currentTeamData = dataTeams[m];
    var zeroCount = 0;
    var oneCount = 0;
    var twoCount = 0;
    var threeCount = 0;
    var count = [zeroCount, oneCount, twoCount, threeCount];
    var largestCount = 0;
    var largestCountIndex;
    for (let n=0; n<currentTeamData.length; n++){
      if (currentTeamData[n]['P'.charCodeAt() - asciiCharFactor] == 0){
        count[0]++;
      } else if (currentTeamData[n]['P'.charCodeAt() - asciiCharFactor] == 1){
        count[1]++;
      } else if (currentTeamData[n]['P'.charCodeAt() - asciiCharFactor] == 2){
        count[2]++;
      } else if (currentTeamData[n]['P'.charCodeAt() - asciiCharFactor] == 3){
        count[3]++;
      }
    }
    if(currentTeamData.length > 0){
      for(let o=count.length - 1; o>=0; o--){
        if (count[o] > largestCount){
          largestCountIndex = o;
          largestCount = count[o];
        }
      }
      if (largestCountIndex == 0){
        activeSheet2.getRange(m+4, 1 + 'K'.charCodeAt() - asciiCharFactor).setValue("$ Not Played");
      } else if (largestCountIndex == 1){
        activeSheet2.getRange(m+4, 1 + 'K'.charCodeAt() - asciiCharFactor).setValue("% Not Effective");
      } else if (largestCountIndex == 2){
        activeSheet2.getRange(m+4, 1 + 'K'.charCodeAt() - asciiCharFactor).setValue("# Average");
      } else if (largestCountIndex == 3){
        activeSheet2.getRange(m+4, 1 + 'K'.charCodeAt() - asciiCharFactor).setValue("! Very Effective");
      }
    } else {
      activeSheet2.getRange(m+4, 1 + 'K'.charCodeAt() - asciiCharFactor).clearContent();
    }
  }
}

function modePark(){
  for (let m=0; m<dataTeams.length; m++){
    var currentTeamData = dataTeams[m];
    var zeroCount = 0;
    var oneCount = 0;
    var twoCount = 0;
    var threeCount = 0;
    var count = [zeroCount, oneCount, twoCount, threeCount];
    var largestCount = 0;
    var largestCountIndex;
    for (let n=0; n<currentTeamData.length; n++){
      if (currentTeamData[n]['Q'.charCodeAt() - asciiCharFactor] == 0){
        count[0]++;
      } else if (currentTeamData[n]['Q'.charCodeAt() - asciiCharFactor] == 1){
        count[1]++;
      } else if (currentTeamData[n]['Q'.charCodeAt() - asciiCharFactor] == 2){
        count[2]++;
      } else if (currentTeamData[n]['Q'.charCodeAt() - asciiCharFactor] == 3){
        count[3]++;
      }
    }
    if(currentTeamData.length > 0){
      for(let o=0; o<count.length; o++){
        if (count[o] > largestCount){
          largestCountIndex = o;
          largestCount = count[o];
        }
      }
      if (largestCountIndex == 0){
        activeSheet2.getRange(m+4, 1 + 'L'.charCodeAt() - asciiCharFactor).setValue("! Dock & Engage");
      } else if (largestCountIndex == 1){
        activeSheet2.getRange(m+4, 1 + 'L'.charCodeAt() - asciiCharFactor).setValue("# Dock");
      } else if (largestCountIndex == 2){
        activeSheet2.getRange(m+4, 1 + 'L'.charCodeAt() - asciiCharFactor).setValue("% Park");
      } else if (largestCountIndex == 3){
        activeSheet2.getRange(m+4, 1 + 'L'.charCodeAt() - asciiCharFactor).setValue("$ None");
      }
    } else {
      activeSheet2.getRange(m+4, 1 + 'L'.charCodeAt() - asciiCharFactor).clearContent();
    }
  }
}

function calcAbilityScore(){
  rows2 = activeSheet2.getDataRange().getValues();
  for (let m=0; m<dataTeams.length; m++){
    if (dataTeams[m].length > 0){    
      var indivScore = 0;
      if(rows2[m+4-1]['B'.charCodeAt() - asciiCharFactor]){
        indivScore += 3;
      }
      indivScore += 6 * rows2[m+4-1]['C'.charCodeAt() - asciiCharFactor];
      indivScore += 4 * rows2[m+4-1]['D'.charCodeAt() - asciiCharFactor];
      indivScore += 3 * rows2[m+4-1]['E'.charCodeAt() - asciiCharFactor];

      if(rows2[m+4-1]['F'.charCodeAt() - asciiCharFactor]){
        indivScore += 8;
      }
      if(rows2[m+4-1]['G'.charCodeAt() - asciiCharFactor]){
        indivScore += 4;
      }

      indivScore += 5 * rows2[m+4-1]['H'.charCodeAt() - asciiCharFactor];
      indivScore += 3 * rows2[m+4-1]['I'.charCodeAt() - asciiCharFactor];
      indivScore += 2 * rows2[m+4-1]['J'.charCodeAt() - asciiCharFactor];

      if(rows2[m+4-1]['K'.charCodeAt() - asciiCharFactor].match(/#/)){ 
        indivScore++; //arbitrary point vals
      } else if(rows2[m+4-1]['K'.charCodeAt() - asciiCharFactor].match(/!/)){
        indivScore += 3; //arbitrary point vals
      }
      
      if(rows2[m+4-1]['L'.charCodeAt() - asciiCharFactor].match(/%/)){
        indivScore += 2;
      } else if(rows2[m+4-1]['L'.charCodeAt() - asciiCharFactor].match(/#/)){
        indivScore += 6;
      }
      else if(rows2[m+4-1]['L'.charCodeAt() - asciiCharFactor].match(/!/)){
        indivScore += 10;
      }
      
      activeSheet2.getRange(m+4, 1 + 'M'.charCodeAt() - asciiCharFactor).setValue(indivScore);

    } else {
      activeSheet2.getRange(m+4, 1 + 'M'.charCodeAt() - asciiCharFactor).clearContent();
    }
  }
}