import  "@styles/header.scss"
import { Params } from "@components/params";

export default class Header{
	constructor(){

	}

	create(){
		for( let key in Params.header){
			let itemHeaders =Params.header[key];
			console.log(itemHeaders);
		}
	}
};