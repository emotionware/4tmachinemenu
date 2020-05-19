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
        window.open(window.location.protocol + '//' + window.location.hostname + ':5001','_blank');
    }
    
   if (item==19){
        window.open(window.location.protocol + '//' + window.location.hostname + ':5002','_blank');
    }
    
   if (item==20){
        window.open(window.location.protocol + '//' + window.location.hostname + ':5003','_blank');
    }
        
         if (item==22){
        window.open('http://portal.soluboxes.com','_blank');
    } 
    
}

 
 

}