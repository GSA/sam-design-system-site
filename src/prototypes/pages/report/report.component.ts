import { Component, OnInit } from '@angular/core';
//import * as d3 from "d3";

@Component({
  templateUrl: 'report.template.html'
})
export class ReportPageComponent implements OnInit{
  
  ngOnInit(){

    // d3.csv("assets/ProgramStatusReport.csv").then(function(rows){

    //   let page = 1;
    //   let itemsPerPage = 50;
    //   let data = rows.slice((page - 1) * itemsPerPage, page * itemsPerPage)

    //   let table = d3.select("#reporttable").append("table");
    //   let thead = table.append("thead");
    //   let tbody = table.append("tbody");
      
    //   thead.append("th").text("Agency");
    //   thead.append("th").text("CFDA Number");
    //   thead.append("th").text("Title");
    //   thead.append("th").text("Current Status");
    //   thead.append("th").text("Last Updated Date");
    //   thead.append("th").text("Obligations Updated");
    //   thead.append("th").text("OMB Review Date");
    //   thead.append("th").text("Last Published Date");
    //   thead.append("th").text("Auto Published");
      
    //   let tr = tbody.selectAll("tr")
    //   .data(data)
    //   .enter().append("tr");
      
    //   let td = tr.selectAll("td")
    //   .data(function(d){ 
    //     return [ 
    //       d["Agency"],
    //       d["CFDA Number"],
    //       d["Title"],
    //       d["Current Status"],
    //       d["Last Updated Date"],
    //       d["Obligations Updated"],
    //       d["OMB Review Date"],
    //       d["Last Published Date"],
    //       d["Auto Published"],
    //     ] 
    //   })
    //   .enter().append("td")
    //   .text(function(d){ return d; })
  
    // });
    
  }
  
}