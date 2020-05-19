function procesar(item,diagrama){


/////////////////////////////////////////EJEMPLO
if (diagrama=='menu'){
	if (item==13){
        window.open('../../rendergrid?grid=tables/tblsysuser','_self');
    }
    
	if (item==12){
        window.open('../../rendergrid?grid=tables/tbldocumento','_self');
    }

	if (item==10){
        window.open('../../rendergrid?grid=tables/tblbackup','_self');
    }
    if (item==14){
        window.open('/static/diagramas/index.html?diagrama=menu','_self');
    }
 
    
 
    
    
        
        if (item==18){
        window.open('http://127.0.0.1:5001','_self');
    }
    
    
}

 
 

}