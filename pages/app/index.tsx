import { useEffect, useState } from "react";
import { Pane, majorScale, ArrowsHorizontalIcon, Button, ChatIcon} from 'evergreen-ui'
import Link from 'next/link'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import MenuCard from '../../components/MenuCard';
import router from "next/router";

export default withPageAuthRequired(() => {

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)

    if (queryParams.has('code')) {
      queryParams.delete('code')
      queryParams.delete('state')
      // TODO: add support for other params to persist using 
      // queryParam.toString() or remove the queryParams method
      router.replace("/app", undefined, { shallow: true })
    }
  }, [])

  return (
    <> 
    <Pane display="flex" flexWrap="wrap" justifyContent="center" 
    marginY={majorScale(4)}
    paddingX={majorScale(3)}>
       <Pane 
            display="flex"
            borderRadius={8}
            elevation={1} 
            background="white" 
            marginX={20} 
            maxWidth="800px" 
            height="400px"
            width="100%"
            paddingX="10px"
            paddingTop={majorScale(5)}
            paddingBottom={majorScale(7)}>
              <div style={{width:"100%", display:"flex", justifyContent:"space-between"}}> 
            
            <div style={{marginLeft:40}}>
                <div style={{marginBottom:30, fontSize:30}}><b>Tiger Plushie</b></div>
              <div style={{fontSize:15}}>
              <div style={{marginBottom:20}}><b>Description:</b> Soft and like new. Is a hand sized tiger plushie.</div>
              <div style={{marginBottom:20}}><b>Type of Trade:</b> Selling</div>
              <div style={{marginBottom:20}}><b>Delivery:</b> Pickup</div>
              </div>

              <div style={{display:"flex", justifyContent:"space-between", marginTop:50}}><Button
            height={45}
            width={majorScale(25)}
            appearance="default"
            marginTop={20}
            iconBefore={ArrowsHorizontalIcon}
            backgroundColor="#6E62B6"
            color="white"
          >
              <div><b>Request to Buy</b></div>
          </Button>

          <Button
            height={45}
            width={majorScale(25)}
            appearance="default"
            marginTop={20}
            iconBefore={ChatIcon}
            color="#6E62B6"
            backgroundColor="white"
            borderColor="#6E62B6"
          >
              <div><b>Ask a Question</b></div>
          </Button>

          </div>

            </div>

            <div style={{marginRight:40, display:"flex flex-col", justifyContent:"flex-end", fontSize:15}}>
              <div style={{marginBottom:5}}>5 days left</div>
              <div style={{color:"grey"}}>2 standing offers</div>
            </div>
            </div>
           
         
        </Pane>
      
    </Pane>
    </>
  );
});