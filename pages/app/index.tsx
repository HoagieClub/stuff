import { useEffect, useState } from "react";
import { majorScale, Pane } from 'evergreen-ui';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
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
    </Pane>
    </>
  );
});