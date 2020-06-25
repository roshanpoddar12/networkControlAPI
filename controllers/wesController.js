const { exec } = require("child_process");
const paramsController = require('./paramsController').command;

exports.executingCommand =async (req,res,next)=>{
  let params='';
  const state = req.body.state;
  const tcParams = req.body;
  const entries = Object.entries(tcParams);
  for(const [key, value] of entries){
        params = `${params} ${paramsController[key]} ${value}`;
  }
    exec(`sudo tcset ${req.params.intfName} --change ${params}`, (error, stdout, stderr) => {
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
          message: `${req.params.intfName} ${params}`,
        });
      }
    });
}

exports.activeRules = (req,res,next)=>{
  exec(` tcshow ${req.params.intfName}`, (error, stdout, stderr) => {
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
        message: JSON.parse(stdout),
        //error: JSON.parse(stderr)
      });
    }
  });
}
exports.reset = (req,res,next)=>{

  exec(` tcdel ${req.params.intfName} --all`, (error, stdout, stderr) => {
    
      res.status(200).json({
        status: 'executed',
        message: `Deleted file`,
      });
    
  });
}