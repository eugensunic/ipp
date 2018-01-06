import React from "react"
import { connect } from "react-redux"
import * as user from "../actions/asyncCAll.js"

@connect((store) => {
  return {
  bar_change:store.bar_change
  };
})
export default class Headerbarpatient extends React.Component {
  constructor(props) {
    super(props);
  }
  callFilterPost(url, ...args) {
      this.props.dispatch(user.asyncAll(url, "post_post", args));
  }
  callFilterData(url, ...args) {
      this.props.dispatch(user.asyncAll(url, "data_data", args));
  }
  callFilterRest(url, ...args) {
      this.props.dispatch(user.asyncAll(url, "rest_rest", args));
  }
  reloadIndexPage(){
    //this should be changed
    window.location.reload();
  }
  render(){

    return(
    <div className="headerbar">
      <p className="post_elementheaderbar_tag_original" onClick={this.reloadIndexPage}>ORIGINAL</p>
      <img src="../../pics/filter.png" className="filter_icon" />

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">generic</p>

      <select name="generic_drop" className={""} onChange={(e)=>{
        let param=e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_generic_post.php', param);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_generic_data.php', param);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_generic_rest.php', param);
      }}
      defaultValue="">
        <option value="" style={{display:'none'}} defaultValue="selected" label="choose drug"></option>
        <option value="ome">omeprazole</option>
        <option value="esome">esomeprazole</option>
        <option value="pant">pantoprazole</option>
        <option value="lans">lansoprazole</option>
        <option value="rabe">rabeprazole</option>
      </select>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">brand</p>

      <select name="brand_drop" className={""}  onChange={(e)=>{
        let param=e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_brand_post.php', param);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_brand_data.php', param);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_brand_rest.php', param);
      }}
      defaultValue="">
        <option value="" style={{display:'none'}} defaultValue="selected" label="choose drug"></option>
        <option value="nex">Nexium</option>
        <option value="esome">Prilosec</option>
        <option value="pant">Protonix</option>
        <option value="preva">Prevacid</option>
        <option value="lans">Zegerid</option>
        <option value="rabe">Losec</option>
      </select>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">dosage</p>

      <span className="header_border_tag" onClick={()=>{
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_dosage_post.php', 'low');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_dosage_data.php', 'low');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_dosage_rest.php', 'low');
      }}>low</span>
      <span className="header_border_tag" onClick={()=>{
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_dosage_post.php', 'maitenance');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_dosage_data.php', 'maitenance');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_dosage_rest.php', 'maitenance');
      }}>maitenance</span>
      <span className="header_border_tag" onClick={()=>{
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_dosage_post.php', 'high');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_dosage_data.php', 'high');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_dosage_rest.php', 'high');
      }}>high</span>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">daily</p>

      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_daily_post.php', 'yes');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_daily_data.php', 'yes');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_daily_rest.php', 'yes');
      }}>yes</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_daily_post.php', 'no');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_daily_data.php', 'no');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_daily_rest.php', 'no');
      }}>no</span>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">duration</p>

      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_duration_post.php', 0, 5);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_duration_data.php', 0, 5);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_duration_rest.php', 0, 5);
      }}>5</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_duration_post.php', 6, 10);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_duration_data.php', 6, 10);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_duration_rest.php', 6, 10);
      }}>10</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_duration_post.php', 11, 15);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_duration_data.php', 11, 15);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_duration_rest.php', 11, 15);
      }}>15</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_duration_post.php', 16, 20);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_duration_data.php', 16, 20);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_duration_rest.php', 16, 20);
      }}>20+</span>
      <br/>
      <p></p>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">condition</p>

      <select name="condition_drop" className={""}  onChange={(e)=> {
        let param=e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_condition_post.php', param);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_condition_data.php', param);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_condition_rest.php', param);
      }} defaultValue="">
        <option value="" style={{display:'none'}} defaultValue="selected" label="choose condition"></option>
        <option value="gerd">GERD</option>
        <option value="be">Barrett's</option>
        <option value="ulcer">Ulcer</option>
        <option value="gastritis">Gastritis</option>
        <option value="esophagitis">Esophagitis</option>
      </select>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">ppicondition</p>

      <select name="ppicondition_drop" className={""} onChange={(e) => {
        let param=e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_ppicondition_post.php', param);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_ppicondition_data.php', param);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_ppicondition_rest.php', param);
      }} defaultValue="">
        <option value="" style={{display:'none'}} defaultValue="selected" label="choose ppicondition"></option>
        <option value="kidney">Kidney problem</option>
        <option value="anxiety">Anxiety</option>
        <option value="dementia">Cognitive problems</option>
        <option value="heart">Heart problem</option>
        <option value="infection">Infection</option>
      </select>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">nutrient def</p>

      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_nutrient_post.php', 'Ca');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_nutrient_data.php', 'Ca');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_nutrient_rest.php', 'Ca');
      }}>Ca</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_nutrient_post.php', 'Mg');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_nutrient_data.php', 'Mg');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_nutrient_rest.php', 'Mg');
      }}>Mg</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_nutrient_post.php', 'Fe');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_nutrient_data.php', 'Fe');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_nutrient_rest.php', 'Fe');
      }}>Fe</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_nutrient_post.php', 'B12');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_nutrient_data.php', 'B12');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_nutrient_rest.php', 'B12');
      }}>B12</span>
      <br/>
      <p></p>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">gender</p>

      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_gender_post.php', 'M');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_gender_data.php', 'M');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_gender_rest.php', 'M');
      }}>M</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_gender_post.php', 'F');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_gender_data.php', 'F');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_gender_rest.php', 'F');
      }}>F</span>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">age</p>

      <span className="header_border_tag"
        onClick={() => {
          this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_age_post.php', 1, 25);
          this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_age_data.php', 1, 25);
          this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_age_rest.php', 1, 25);
        }}>young</span>
      <span className="header_border_tag"
        onClick={() => {
          this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_age_post.php', 26, 50);
          this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_age_data.php', 26, 50);
          this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_age_rest.php', 26, 50);
        }}>adult</span>
      <span className="header_border_tag"
        onClick={() => {
          this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_age_post.php', 51, 100);
          this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_age_data.php', 51, 100);
          this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_age_rest.php', 51, 100);
        }}>elderly</span>
      <br/>
      <p></p>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">url-source</p>

      <select name="url_drop" className={""} onChange={() => {
        let param=e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_sourceurl_post.php', param);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_sourceurl_data.php', param);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_sourceurl_rest.php', param);
      }} defaultValue="">
        <option value="" style={{display:'none'}} defaultValue="selected" label="choose url"></option>
        <option value="kidney">Patient info</option>
        <option value="anxiety">PeoplesPharmacy</option>
        <option value="dementia">DailyMail</option>
        <option value="heart">BarrettsCampaign</option>
      </select>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">year-posted</p>

      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_date_post.php', '2000');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_date_data.php', '2000');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_date_rest.php', '2000');
      }}>&#8592;2000</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_date_post.php', '2010');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_date_data.php', '2010');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_date_rest.php', '2010');
      }}>2000-2010</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_date_post.php', '2010>');
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_date_data.php', '2010>');
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_date_rest.php', '2010>');
      }}>2010&#8594;</span>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">opinion-post</p>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_opinion_post.php', 1);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_opinion_data.php', 1);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_opinion_rest.php', 1);
      }}>positive</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_opinion_post.php', 2);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_opinion_data.php', 2);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_opinion_rest.php', 2);
      }}>negative</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_opinion_post.php', 3);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_opinion_data.php', 3);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_opinion_rest.php', 3);
      }}>interesting</span>
      <span className="header_border_tag" onClick={() => {
        this.callFilterPost('http://projectsgono.com/medsforlife/appcall/drug_opinion_post.php', 4);
        this.callFilterData('http://projectsgono.com/medsforlife/appcall/drug_opinion_data.php', 4);
        this.callFilterRest('http://projectsgono.com/medsforlife/appcall/drug_opinion_rest.php', 4);
      }}>extreme</span>
      <br/>
      <hr style={{marginTop:0,marginBottom:0}}/>
      <span className="number_below_main_header">{"#"+this.props.bar_change.page_num_patient}</span>
      <div className="center" style={{marginRight:46}}>
        <span className="inline">Criteria:</span><span className="inline">GERD</span>
      </div>



    </div>
   )
  }
}
