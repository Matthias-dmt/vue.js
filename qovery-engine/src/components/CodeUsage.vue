<template>
  <section class="relative z-10 bg-white p-4 text-left overflow-y-scroll">
    <button
      class="text-gray-100 text-base uppercase border-none py-1 px-3 rounded font-semibold bg-indigo-500 ml-10"
    >
      Rust
    </button>
    <pre>
        <code class="javascript text-xs">
        let engine = Engine::new( 
            context, // parameters
            local_docker, //
            initialize Docker as Build Platform ecr, // initialize Elastic Container
            registry aws, // initialize AWS account
            cloudFlare, // initialize CloudFlare as DNS Nameservers
        );
        
        let session = match engine.session() {
            Ok(session) => session, // get the session
            Err(config_error) => panic!("configuration error {:?}",config_error),
        };
     
        let mut tx = session.transaction();
    
        // create EKS (AWS managed kubernetes cluster) 
        tx.create_kubernetes(&eks);
    
        // create the infrastructure and wait for the result 
        match tx.commit() {
            TransactionResult::Ok => println!("OK"),
            TransactionResult::Rollback(commit_err) => 
            println!("ERROR but rollback OK"),
            TransactionResult::UnrecoverableError(commit_err, rollback_err) => 
            println!("FATAL ERROR")
        };
        </code>
    </pre>
  </section>
</template>

<script>
export default {
  name: "CodeUsage",
};
</script>
