const { exec } = require("child_process");
exports.latency =async (req,res,next)=>{
  let params='';
  const state = req.body.state;
  const tcParams = req.body;
  const entries = Object.entries(tcParams);
  for(const [key, value] of entries){
    if(key !== 'state')
      if(key === 'jitter')
        params = `${params} ${value} distribution normal`;
      else 
        params = `${params} ${key} ${value}`;
      
  }
  
    exec(` tc qdisc ${state} dev ${process.env.INTERFACE} root netem ${params}`, (error, stdout, stderr) => {
      if (error) {
        res.status(400).json({
          status: 'error',
          message: error.stack,
          errorCode: error.code,
          signalRecieved: error.signal
        });
        return ;
      }else{
        res.status(200).json({
          status: 'executed',
          message: ` tc qdisc ${state} dev ${process.env.INTERFACE} root netem ${params}`,
        });
      }
    });
}

exports.activeRules = (req,res,next)=>{
  exec(` tc qdisc show dev ${process.env.INTERFACE}`, (error, stdout, stderr) => {
    if (error) {
      res.status(400).json({
        status: 'error',
        message: error.stack,
        errorCode: error.code,
        signalRecieved: error.signal
      });
      return ;
    }else{
      res.status(200).json({
        status: 'executed',
        message: ` ${stdout} ${stderr}`,
      });
    }
  });
}
exports.reset = (req,res,next)=>{
  exec(` tc qdisc del dev ${process.env.INTERFACE} root`, (error, stdout, stderr) => {
    if (error) {
      res.status(400).json({
        status: 'error',
        message: error.stack,
        errorCode: error.code,
        signalRecieved: error.signal
      });
      return ;
    }else{
      res.status(200).json({
        status: 'executed',
        message: `Deleted file`,
      });
    }
  });
}